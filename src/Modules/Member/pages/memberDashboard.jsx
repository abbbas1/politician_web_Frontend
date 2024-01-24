import { useParams } from "react-router-dom";
import AxiosInstance from "../../../utils/axios";
import { useEffect, useState } from "react";

function MemberDashboard() {
  const { id } = useParams();
  const [member, setMember] = useState([]);
  // console.log(member);
  //   console.log(member);
  const getAdmin = async () => {
    const response = await AxiosInstance.get(`/member/getone/${id}`);
    setMember([response.data.Member]);
  };
  useEffect(() => {
    getAdmin();
  }, []);
  return (
    <div >
      <table className=" rounded-md bg-stone-200 overflow-hidden">
        <tr className="bg-green-600 h-10">
          <th>Profile</th>
          <th>Name</th>
          <th>Email</th>
          <th>Contact</th>
          <th>Cnic</th>
          <th>Address</th>
        </tr>
        {member.map((element,index)=>{
          return(
            <tr className="bg-stone-200 items-center text-center font-medium h-14 ">
              <td className="pl-7 pr-7">
                <img className="rounded-full h-16 w-16" src={element.memberPicture} alt="noprofile.webp" />
              </td>
              <td className="pl-6 ">{element.memberName}</td>
              <td className="pl-7 ">{element.memberEmail}</td>
              <td className="pl-7 ">{element.memberPhoneNumber}</td>
              <td className="pl-7 ">{element.memberCnic}</td>
              <td className="pl-7 pr-2">{element.memberAddress}</td>
            </tr>
          )
        })}
      </table>
    </div>
    // <div className="bg-stone-50  justify-center rounded-sm shadow-lg overflow-hidden h-72 w-60">
    //   {member && (
    //     <h1 className="p-2 pl-5 font-medium text-lg pb-4 w-60 text-center bg-green-500 h-11 ">
    //       {member.memberName}
    //     </h1>
    //   )}
    //   <h1 className="font-bold pl-2">Email:</h1>
    //   {member && (
    //     <h1 className="font-medium pl-2 pb-1">{member.memberEmail}</h1>
    //   )}
    //   <hr />
    //   <h1 className="font-bold pl-2">Cnic:</h1>
    //   {member && <h1 className="pl-2 pb-1">{member.memberCnic}</h1>}
    //   <hr />
    //   <h1 className="font-bold pl-2">Phone Number:</h1>
    //   {member && <h1 className=" pl-2">{member.memberPhoneNumber}</h1>}
    //   <hr />
    //   <h1 className="font-bold pl-2">Address:</h1>
    //   {member && <h1 className=" pl-2">{member.memberAddress}</h1>}
    //   <button className="w-1/2 pt-2 bg-green-500 text-white p-2 rounded hover:bg-green-600 ">
    //     Edit Profile
    //   </button>
    // </div>
  );
}

export default MemberDashboard;
