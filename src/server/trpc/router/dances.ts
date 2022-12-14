import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const danceRouter = router({
  getDanceByName: publicProcedure
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
  updateComment: publicProcedure
    .input(z.object({ id: z.string(), comment: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.dances.update({
        where: {
          id: input.id,
        },
        data: {
          comment: input.comment,
        },
      });
    }),
});
