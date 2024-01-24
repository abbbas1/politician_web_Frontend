import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AxiosInstance from "../../../utils/axios";

function MemberNewsPage() {
  const { id } = useParams();
  const [memberNews, setMemberNews] = useState([]);
  const [showComments, setshowComments] = useState(null);
  // console.log(memberNews, "bbbbbbbbbbb");

  const getAdmin = async () => {
    const response = await AxiosInstance.get(`/member/getone/${id}`);
    setMemberNews(response.data.Member.News);
  };
  const LikeUpdate = async (newsId) => {
    try {
      const newsItem = memberNews.find((item) => item.id === newsId);

      if (newsItem) {
        const isLiked = newsItem.isLiked || false;
        const newLikes = isLiked
          ? newsItem.totalLikes - 1
          : newsItem.totalLikes + 1;

        const updateResponse = await AxiosInstance.put(
          `/news/updatelikes/${newsId}`,
          {
            totalLikes: newLikes,
          }
        );

        if (updateResponse.status === 200) {
          setMemberNews((prevNews) =>
            prevNews.map((item) =>
              item.id === newsId
                ? { ...item, totalLikes: newLikes, isLiked: !isLiked }
                : item
            )
          );
        } else {
          console.error("Failed to update likes:", updateResponse.data.message);
        }
      } else {
        console.error(`News item not found for newsId: ${newsId}`);
      }
    } catch (error) {
      console.error("Error updating likes:", error);
    }
  };

  const handleToggle = (index) => {
    setshowComments((previousIndex) =>
      previousIndex === index ? null : index
    );
  };

  useEffect(() => {
    getAdmin();
  }, [id]);
  return (
    <>
      <div className="h-full  flex flex-col items-center">
        {memberNews.map((element, index) => {
          return (
            <div
              key={index}
              className="shadow-2xl justify-between border-4 flex flex-col w-80 rounded-md bg-stone-50 mb-5 h-full"
            >
              <h1 className="pt-2 font-medium pl-2">{element.newsTittle}</h1>
              <h1 className="pt-1 pb-1 pl-2">{element.newsContent}</h1>
              <img className="" src={element.newsPicture} alt="image" />
              <div className="flex justify-evenly pb-2 pt-2 items-center">
                <button
                  onClick={() => LikeUpdate(element.id)}
                  className={`bg-stone-200 hover:bg-stone-300 shadow-lg h-8 w-16 rounded-lg font-medium ${
                    element.isLiked
                      ? "bg-blue-600 hover:bg-blue-800 text-white"
                      : ""
                  }`}
                >
                  {element.totalLikes} Like
                </button>
                <button
                  onClick={() => handleToggle(index)}
                  className="bg-stone-200 hover:bg-stone-300 shadow-xl w-24 h-8 rounded-lg font-medium"
                >
                  Comment
                  {element.newscomments.length}
                </button>
              </div>
              {showComments === index && (
                <div className="flex flex-col  ">
                  {element.newscomments.map((element, commentIndex) => (
                    <div
                      key={commentIndex}
                      className="bg-gray-200 p-2 flex items-center h-8 my-1 rounded-sm"
                    >
                      <p className="text-gray-600 font-medium">
                        {element.Comments}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default MemberNewsPage;
