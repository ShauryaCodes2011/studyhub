import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q") || "";
  const type = searchParams.get("type") || "all";

  if (!query || query.length < 2) {
    return NextResponse.json({ results: [] });
  }

  try {
    const searchCondition = {
      contains: query,
      mode: "insensitive" as const,
    };

    const [books, resources, users] = await Promise.all([
      prisma.nCERTBook.findMany({
        where: {
          OR: [
            { title: searchCondition },
            { subject: searchCondition },
          ],
        },
        take: 5,
      }),
      prisma.resource.findMany({
        where: {
          OR: [
            { title: searchCondition },
            { description: searchCondition },
            { tags: { has: query } },
          ],
        },
        take: 5,
      }),
      prisma.user.findMany({
        where: {
          OR: [
            { name: searchCondition },
            { username: searchCondition },
          ],
        },
        select: { id: true, name: true, image: true, username: true },
        take: 5,
      }),
    ]);

    return NextResponse.json({
      results: {
        books,
        resources,
        users,
      },
    });
  } catch (error) {
    console.error("Search error:", error);
    return NextResponse.json(
      { error: "Search failed" },
      { status: 500 }
    );
  }
}
