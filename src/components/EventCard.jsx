import { useGetRecentTechNewsQuery } from "../services/techNewsApi";

export default function EventCard() {
  const { data, error, isLoading } = useGetRecentTechNewsQuery();
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>There was an Error 😿</p>;
  }
  console.log(data);
}