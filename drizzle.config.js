/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.ts",
  dialect: 'postgresql',
  dbCredentials: {
    url:'postgresql://aidb_owner:yoCL7nO3TYBc@ep-shiny-moon-a58wjkt2.us-east-2.aws.neon.tech/aidb?sslmode=require',
  }
};
