import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    User: v.string(),
    Password: v.string(),
  }),
});