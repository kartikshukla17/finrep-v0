import { defineConfig } from "tinacms";

// Branch configuration for Approach A (Branch-based workflow)
// - staging branch: editors work here, deploys to staging site
// - main branch: production content, deploys to production site
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  // Dynamic branch based on environment
  branch,

  // Tina Cloud credentials (required for production)
  // Get these from https://app.tina.io after creating your project
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      {
        name: "blog",
        label: "Blog Posts",
        path: "content/blog",
        format: "md",
        defaultItem: () => ({
          draft: true, // New posts start as drafts by default
          date: new Date().toISOString(),
        }),
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft Mode",
            description:
              "Draft posts only appear on staging. Uncheck to publish to production.",
          },
          {
            type: "boolean",
            name: "featured",
            label: "Featured on Homepage",
            description:
              "Show this article in the Best Practices & Insights section on the homepage. Max 3 articles can be featured; only the 3 most recent (by date) will appear.",
          },
          {
            type: "datetime",
            name: "date",
            label: "Publication Date",
            required: true,
          },
          {
            type: "string",
            name: "categories",
            label: "Categories",
            list: true,
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
          },
          {
            type: "image",
            name: "coverImage",
            label: "Cover Image",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
        ui: {
          filename: {
            readonly: false,
            slugify: (values) => {
              return (
                values?.title
                  ?.toLowerCase()
                  .replace(/ /g, "-")
                  .replace(/[^\w-]+/g, "") || ""
              );
            },
          },
          router: ({ document }) => `/blogs/${document._sys.filename}`,
        },
      },
    ],
  },
});
