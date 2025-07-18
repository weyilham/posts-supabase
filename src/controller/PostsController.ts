import prisma from "@/lib/prisma";
import { PostType } from "@/types/PostType";

export async function getPost(): Promise<PostType[]> {
  const posts = await prisma.post.findMany({
    include: {
      author: true,
    },
  });

  return posts;
}
