export type PostType = {
  id: number;
  title: string;
  content: string | null;
  published: boolean;
  authorId: number;
  author?: {
    id: number;
    name: string | null;
    email: string;
  };
};
