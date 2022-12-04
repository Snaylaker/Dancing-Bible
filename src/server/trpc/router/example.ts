import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const exampleRouter = router({
  getByName: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.dances.findFirst({
        where: {
          name: input.name,
        },
      });
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.dances.findMany();
  }),
});
