import banner from "/banner.webp";

function HomePage() {
  return (
    <>
      <img src={banner} alt="Banner" />
      <div className="pt-10 pb-7 block text-center">
        <span className="text-green-700 text-4xl font-semibold pb-8 font-sans">
          We are the Democratic Party.
        </span>
        <br />
        <span className="pb-6 pt-7 font-medium text-lg">
          We’re fighting for a brighter, more equal future: rolling up our
          sleeves and
        </span>
        <br />
        <span className="pb-6 pt-7 font-medium text-lg">
          organizing everywhere to build a better Pakistan for all.
        </span>
        <br />
      </div>
      <br />
      <br />
      <div className="flex justify-around">
        <div className=" pl-4 font-lato text-center pb-4 mx-10">
          <h1 className="font-bold text-l text-green-700 pb-2 ">
            WHO IS IMRAN KHAN
          </h1>
          <p>
            Imran Khan, born in Lahore in 1952, achieved cricket greatness as
            Pakistan's captain, leading the team to its first World Cup victory
            in 1992. Transitioning to politics, he founded the Pakistan
            Tehreek-e-Insaf (PTI) in 1996. Elected as Prime Minister in 2018,
            Khan has focused on economic reforms, anti-corruption,
            and social welfare.
          </p>
        </div>
        <div className="font-roboto pl-10 text-center pb-4 mx-10">
          <h1 className="font-bold text-l text-green-700 pb-2">OUR IDEOLOGY</h1>
          <p>
            Striving for self-reliance and restoring trust in public
            institutions. Commitment to political stability, transparent
            government, and accountability. Focused on addressing root causes of
            religious extremism and promoting tolerance. Emphasis on family
            values, care for senior citizens, and preserving cultural diversity.
          </p>
        </div>
        <div className="font-montserrat pl-10 text-center pb-4 mx-10">
          <h1 className="font-bold text-l text-green-700 pb-2">OUR MISSIONS</h1>
          <p>
            Establishing a just society based on humane values. Restoring the
            sovereign right of people to choose options aligned with cultural
            and religious values. Mission to create a free society based on
            justice, with national renewal possible only if
            people are truly free.
          </p>
        </div>
      </div>
      <h1 className="font-bold text-2xl flex justify-center  text-green-700">
        Our Priorities
      </h1>
      <hr className="border-t border-b border-solid border-8 pb-0" />
      <div className="flex justify-around mb-5 pt-4">
        <div className="h-1/2 pb-5 bg-stone-50 text-center shadow-lg rounded-lg  overflow-hidden transform transition-transform hover:scale-105">
          <img className="h-60 w-90 " src="doctors.jpg" alt="" />
          <h1 className="text-green-700 pt-3 text-lg font-bold">
            Building up your Health system
          </h1>
        </div>
        <div className="h-1/2 bg-stone-50 text-center pb-6 shadow-lg rounded-lg  overflow-hidden transform transition-transform hover:scale-105">
          <img className="h-60 w-90 " src="housing.jpg" alt="" />
          <h1 className="text-green-700 pt-2 text-lg font-bold">
            Building Houses for the Poor
          </h1>
        </div>
        <div className="h-1/2 bg-stone-50 text-center pb-6 shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105">
          <img className="h-60 w-90 " src="climate.jpg" alt="" />
          <h1 className="text-green-700 pt-2 text-lg font-bold">
            Working for the victims of the flood
          </h1>
        </div>
      </div>
      {/* second row of images */}
      <div className="flex justify-around mb-5 pt-4">
        <div className="h-1/2 pb-5 bg-stone-50 text-center shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105">
          <img className="h-60 w-90" src="imran-khan.jpg" alt="" />
          <h1 className="text-green-700 pt-3 text-lg font-bold">
            Imran khan in UN
          </h1>
        </div>
        <div className="h-1/2 bg-stone-50 text-center pb-6 shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105">
          <img className="h-60 w-90" src="kids.jpg" alt="" />
          <h1 className="text-green-700 pt-2 text-lg font-bold">
            Kids are our first priority
          </h1>
        </div>
        <div className="h-1/2 bg-stone-50 text-center pb-6 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
          <img className="h-60 w-90" src="Mianwali(JPG)_2.jpg" alt="" />
          <h1 className="text-green-700 pt-2 text-lg font-bold ">
            Students are the future of Pakistan
          </h1>
        </div>
      </div>
    </>
  );
}

export default HomePage;
