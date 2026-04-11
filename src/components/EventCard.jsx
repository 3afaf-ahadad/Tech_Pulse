import { useGetRecentTechNewsQuery } from "../services/techNewsApi";

export default function EventCard() {
  const { data, error, isLoading } = useGetRecentTechNewsQuery();
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>There was an Error 😿</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {data.map((post) => (
        <article
          className="bg-luxury-com-dark text-blue-50 rounded-xl overflow-hidden shadow-md flex flex-col"
          key={post.id}
        >
          <h2>
            <hr />
            {post.title}
          </h2>
          <img
            className="w-full h-58 object-cover"
            src={post.social_image}
            alt={post.title}
          />

          <div className="p-5 flex flex-col gap-4">
            Tags :
            {post.tag_list.map((tag) => (
              <span className="block" key={tag}>{tag}</span>
            ))}
          <p>
            Description :{post.description.replace("&lt;!DOCTYPE html&gt;", "")}
            <a href={post.url} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </p>

          <footer>
            <p>Author: {post.user.username}</p>
            <p>Published : {post.readable_publish_date}</p>
          </footer>
          </div>

        </article>
      ))}
    </div>
  );
}
