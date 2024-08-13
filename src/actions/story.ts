"use server";
import prisma from "@/lib/prisma";

const storyUpsert = async (image: string) => {
  const db = prisma.images;

  return db.create({
    data: {
      url: image,
    },
  });
};

const getStory = async () => {
  const db = prisma.images;

  return db.findMany();
};

export { storyUpsert, getStory };
