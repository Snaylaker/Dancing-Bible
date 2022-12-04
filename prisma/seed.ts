import { prisma } from "../src/server/db/client";
import dances from "./danses.json";

type Dance = {
  url: string;
  name: string;
  timestamp: string;
};
async function main() {
  dances.forEach(async (dance: Dance) => {
    console.log(`Creating dance ${dance.name}...`);
    await prisma.dances.create({
      data: {
        url: dance.url,
        name: dance.name,
        timestamp: dance.timestamp,
        comment: "",
      },
    });
    console.log(`dance ${dance.name} created!~`);
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
