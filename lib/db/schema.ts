import {
  pgTable,
  text,
  timestamp,
  uuid,
  integer,
  boolean,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
export const files = pgTable("files", {
    id: uuid("id").defaultRandom().primaryKey(),
    // Basic file/folder information
    name: text("name").notNull(),
    path: text("path").notNull(), // Full path to the file/folder
    size: integer("size").notNull(), // Size in bytes (0 for folders)
    type: text("type").notNull(), // MIME type for files, "folder" for folders
     // Storage information
    fileUrl: text("file_url").notNull(), // URL to access the file
    thumbnailUrl: text("thumbnail_url"), // Optional thumbnail for images/documents



})