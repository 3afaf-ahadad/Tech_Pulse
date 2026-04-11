import { useGetRecentTechNewsQuery } from "../services/techNewsApi";

export default function EventCard() {
  const { data, error, isLoading } = useGetRecentTechNewsQuery();
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>There was an Error 😿</p>;
  }

  // console.log("Description : ", data[2].description)
  return (
    <div>
      {data.map((post) => (
        <article  key={post.id}>
          <h2>
            {" "}
            <hr /> {post.title} {console.log("Description : ", post.description)}
          </h2>
          <img src={post.social_image} alt="image" />
          <br />
          <div className="tags">
            {post.tag_list.map((tag) => (
              <span>{tag} </span>
            ))}
          </div>
          <br />
          <br />
          <footer>
            Author: {post.user.username}
            <br />
            Published : {post.readable_publish_date}
          </footer>
        </article>
      ))}
    </div>
  );
}
