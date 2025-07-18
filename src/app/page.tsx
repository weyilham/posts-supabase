import { getPost } from "@/controller/PostsController";

export default async function Home() {
  const posts = await getPost();
  return (
    <div className="w-full flex min-h-screen flex-col items-center mt-4 p-4">
      <div className="mt-4 text-center">
        <p className="text-gray-600">Welcome to my blog application!</p>
        <p className="text-gray-600">This is a simple Next.js app.</p>
      </div>

      <div className="w-[600px] mt-8 border p-4 rounded-lg shadow-lg">
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.id} className="border-b pb-2">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <small className="text-xs text-white bg-green-500 p-1 rounded">
                  {post.published ? "Published" : "Draft"}
                </small>
              </div>
              <p className="text-sm text-gray-500">
                Author Nama: {post.author?.name || "Unknown"}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
