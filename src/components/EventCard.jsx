function EventCard({title, date, community, tags}) {

    return(
        <div>
            <div>
                <span>  {community} </span>
                <span>  {date} </span>
            </div>

        <h3> {title} </h3>


        </div>
    )
}
export default EventCard;
