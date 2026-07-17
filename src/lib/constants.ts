export const CLASSES = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

export const SUBJECTS_BY_CLASS: Record<string, string[]> = {
  "1": ["Mathematics", "English", "Hindi", "Environmental Studies"],
  "2": ["Mathematics", "English", "Hindi", "Environmental Studies"],
  "3": ["Mathematics", "English", "Hindi", "Environmental Studies"],
  "4": ["Mathematics", "English", "Hindi", "Environmental Studies"],
  "5": ["Mathematics", "English", "Hindi", "Environmental Studies"],
  "6": ["Mathematics", "Science", "English", "Hindi", "Social Science", "Sanskrit"],
  "7": ["Mathematics", "Science", "English", "Hindi", "Social Science", "Sanskrit"],
  "8": ["Mathematics", "Science", "English", "Hindi", "Social Science", "Sanskrit"],
  "9": ["Mathematics", "Science", "English", "Hindi", "Social Science", "Sanskrit", "Information Technology"],
  "10": ["Mathematics", "Science", "English", "Hindi", "Social Science", "Sanskrit", "Information Technology"],
  "11": ["Physics", "Chemistry", "Biology", "Mathematics", "English", "Hindi", "Computer Science", "Economics", "Accountancy", "Business Studies", "History", "Geography", "Political Science", "Psychology", "Sociology"],
  "12": ["Physics", "Chemistry", "Biology", "Mathematics", "English", "Hindi", "Computer Science", "Economics", "Accountancy", "Business Studies", "History", "Geography", "Political Science", "Psychology", "Sociology"],
};

export const LANGUAGES = ["English", "Hindi", "Urdu", "Sanskrit"];

export const BOARDS = [
  { label: "CBSE", value: "CBSE" },
  { label: "ICSE", value: "ICSE" },
  { label: "State Board", value: "STATE" },
  { label: "Other", value: "OTHER" },
];

export const RESOURCE_TYPES = [
  { label: "Notes", value: "notes" },
  { label: "Previous Year Papers", value: "question-paper" },
  { label: "Sample Papers", value: "sample-paper" },
  { label: "Formula Sheets", value: "formula-sheet" },
  { label: "Revision Notes", value: "revision-notes" },
  { label: "Assignments", value: "assignment" },
  { label: "Projects", value: "project" },
];

export const FILE_TYPES = [
  { label: "PDF", value: "pdf" },
  { label: "DOCX", value: "docx" },
  { label: "PPT", value: "ppt" },
  { label: "Image", value: "image" },
  { label: "ZIP", value: "zip" },
];

export const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  "image/jpeg",
  "image/png",
  "image/webp",
  "application/zip",
  "application/x-zip-compressed",
];

export const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB

export const SITE_CONFIG = {
  name: "StudyHub",
  description: "Your all-in-one student platform for notes, resources, NCERT books, and study partners.",
  url: "https://studyhub.app",
  ogImage: "https://studyhub.app/og.png",
  links: {
    twitter: "https://twitter.com/studyhub",
    github: "https://github.com/studyhub",
  },
};

export const FEATURES = [
  {
    title: "NCERT Library",
    description: "Access all NCERT books from Class 1-12 across all subjects and languages. Read online or download for free.",
    icon: "book-open",
    href: "/ncert",
  },
  {
    title: "Resource Library",
    description: "Find previous year papers, sample papers, notes, formula sheets and more, filtered by class, subject, and board.",
    icon: "library",
    href: "/study-resources",
  },
  {
    title: "Student Marketplace",
    description: "Upload and share your own notes, projects, and study materials with fellow students.",
    icon: "store",
    href: "/marketplace",
  },
  {
    title: "Find Study Partners",
    description: "Connect with students studying the same subjects and collaborate on projects.",
    icon: "users",
    href: "/team-finder",
  },
  {
    title: "Dashboard",
    description: "Track your recent activity, saved resources, and manage your study materials in one place.",
    icon: "layout-dashboard",
    href: "/dashboard",
  },
  {
    title: "Fast Search",
    description: "Instantly find books, notes, projects, and users across the entire platform.",
    icon: "search",
    href: "/search",
  },
];

export const FAQS = [
  {
    question: "What is StudyHub?",
    answer: "StudyHub is a free platform for students to access NCERT books, share study resources, find study partners, and organize their learning materials — all in one place."
  },
  {
    question: "Is StudyHub free to use?",
    answer: "Yes! StudyHub is completely free for all students. We believe quality education resources should be accessible to everyone."
  },
  {
    question: "Can I upload my own notes?",
    answer: "Absolutely! You can upload notes, assignments, projects, and other study materials to share with the community. Simply create an account and use the upload feature."
  },
  {
    question: "Are the NCERT books official?",
    answer: "We provide links to official NCERT publications where available. For uploaded content, sources are clearly indicated. We comply with all applicable copyright laws."
  },
  {
    question: "How do I find study partners?",
    answer: "Use our Team Finder feature to search for students studying the same subjects and classes. You can connect and collaborate on projects together."
  },
  {
    question: "Can I access StudyHub on mobile?",
    answer: "Yes! StudyHub is fully responsive and works great on desktop, tablet, and mobile browsers."
  },
];
