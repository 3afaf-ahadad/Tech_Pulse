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
    <div>
      {data.map((post) => (
        <article key={post.id}>
          <h2>
            {" "}
            <hr />
            <a href={post.url}></a> {post.title}
          </h2>
          <img src={post.social_image} alt={post.title} />
          
          <div className="tags">
            Tags :{" "}
            {post.tag_list.map((tag) => (
              <span key={tag}>{tag} </span>
            ))}
          </div>
          
          <p>
            {" "}
            Description :{" "}
            {post.description.replace("&lt;!DOCTYPE html&gt;", "")}{" "}
          </p>
          
          <footer>
            Author: {post.user.username}
            
            Published : {post.readable_publish_date}
          </footer>
        </article>
      ))}
    </div>
  );
}
