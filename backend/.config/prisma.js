import {defineConfig} from 'prisma/config'
import path from "node:path"
import "dotenv/config"

export default defineConfig({
	// optional if schema is at ./prisma/schema.prisma
  schema: path.join("..", "prisma", "schema"),
  migrations: {
    // will run for `npx prisma db seed` and after migrations
    seed: "node src/seeds/seed.js",
  },
})

