import { router } from "../trpc";
import { danceRouter } from "./dances";

export const appRouter = router({
  dances: danceRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
