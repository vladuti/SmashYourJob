import { query } from "./_generated/server";
import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const getUser = query({
  args: {
    User: v.string(),
    Password: v.string(),
  },
  handler: async (ctx, args) => {
    const userExists = await ctx.db
      .query("users")
      .filter((q) =>
        q.and(
          q.eq(q.field("User"), args.User),
          q.eq(q.field("Password"), args.Password)
        )
      )
      .collect();

    return userExists;
  },
});

export const addUser = mutation({
  args: {
    User: v.string(),
    Password: v.string(),
  },

  handler: async (ctx, args) => {
    // Verificăm dacă utilizatorul există deja înainte de a încerca adăugarea
    const userExists = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("User"), args.User))
      .collect();

    if (userExists.length > 0) {
      // Utilizatorul există deja, poți trata acest caz în consecință (afisează o eroare, întoarce un mesaj, etc.)
      return "Utilizatorul există deja.";
    } else {
      // Adăugăm utilizatorul în baza de date
      await ctx.db.insert("users", {
        User: args.User,
        Password: args.Password,
      });
      // Returnăm un mesaj de succes sau altceva, dacă este necesar
      return "Utilizatorul a fost adăugat cu succes.";
    }
  },
});
