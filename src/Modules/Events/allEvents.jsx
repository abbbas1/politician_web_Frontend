import { useEffect, useState } from "react";
import AxiosInstance from "../../utils/axios";
function AllEventsPage() {
  const [events, setEvents] = useState([]);
  console.log(events);
  const getNews = async () => {
    try {
      const response = await AxiosInstance.get("/events/getAll");
      setEvents(response.data.Event);
      //   console.log(response);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  useEffect(() => {
    getNews();
  }, []);
  return (
    <>
      <div className="h-full  flex flex-col items-center">
        {events.map((element, index) => {
          return (
            <div className="shadow-2xl justify-between overflow-hidden flex flex-col w-1/2 rounded-md bg-stone-50 mb-5 h-full">
              <img className="" src={element.eventPicture} alt="picture" />
              <h1 className="pt-2 font-bold pl-2">{element.eventTittle}</h1>
              <h1 className="pt-1 pb-1 pl-2">
                <b>Event Date: </b>
                {element.eventDate}
              </h1>
              <h1 className="pt-1 pb-1 pl-2">{element.eventDescription}</h1>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default AllEventsPage;
