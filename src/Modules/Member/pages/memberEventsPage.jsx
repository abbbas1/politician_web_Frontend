import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AxiosInstance from "../../../utils/axios";

function MemberEventsPage() {
  const { id } = useParams();
  const [memberEvents, setMemberEvents] = useState([]);

  console.log(memberEvents);
  const getAdmin = async () => {
    const response = await AxiosInstance.get(`/member/getone/${id}`);
    setMemberEvents(response.data.Member.events);
  };

  useEffect(() => {
    getAdmin();
  }, [id]);
  return (
    <>
    <div className="h-full  flex flex-col items-center">
      {memberEvents.map((element, index) => {
        return (
          <div className="shadow-2xl justify-between overflow-hidden flex flex-col w-1/2 rounded-md bg-stone-50 mb-5 h-full">
            <img className="" src={element.eventPicture} alt="picture" />
            <h1 className="pt-2 font-bold pl-2">{element.eventTittle}</h1>
            <h1 className=" pl-2">
              <b>Event Date: </b>
              {element.eventDate}
            </h1>
            <h1 className=" pb-1 pl-2">{element.eventDescription}</h1>
          </div>
        );
      })}
    </div>
  </>
  );
}

export default MemberEventsPage;
