import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";

export const auth = betterAuth({
  appName: "StudyHub",
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  secret: process.env.BETTER_AUTH_SECRET!,
  url: process.env.BETTER_AUTH_URL!,
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
    sendResetPassword: async ({ user, url }) => {
      // In production, send email via Resend/SendGrid etc.
      console.log(`Reset password URL for ${user.email}: ${url}`);
    },
  },
  user: {
    modelName: "User",
    additionalFields: {
      role: {
        type: "string",
        defaultValue: "USER",
        required: false,
        input: false,
      },
      username: {
        type: "string",
        required: false,
        input: true,
        unique: true,
      },
      school: {
        type: "string",
        required: false,
        input: true,
      },
      grade: {
        type: "string",
        required: false,
        input: true,
      },
      subjects: {
        type: "string[]",
        required: false,
        input: true,
      },
      bio: {
        type: "string",
        required: false,
        input: true,
      },
    },
  },
  rateLimit: {
    enabled: true,
    window: 60,
    max: 10,
  },
});
