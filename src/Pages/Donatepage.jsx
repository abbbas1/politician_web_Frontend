import { Formik, FormikProvider } from "formik";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

const Popup = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8">
        <p>
          We appreciate your commitment to civic engagement and your support for
          our Party. Your donation plays a vital role in shaping the future of
          our community and country.
        </p>
        <button
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

function DonationForm() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = () => {
    toast.success("submitted successfully");
    setShowPopup(true);
  };
  const closePopup = () => {
    // Close the popup when the close button is clicked
    setShowPopup(false);
  };
  return (
    <>
      <ToastContainer />
      <FormikProvider>
        <div className="flex flex-col items-center mb-4">
          <div className="flex flex-col items-center shadow-lg w-2/3 rounded-md border">
            <h1 className="font-bold text-4xl pb-4 text-green-700">
              Donation-Form
            </h1>
            <h3 className="text-xs mb-2">
              Thank you for considering a donation! Your generosity helps us
              continue our mission and support the community.
            </h3>
            <hr className="bg-black mb-2 w-full" />
            <div className="flex flex-col gap-0">
              <div className="flex mb-2">
                <label className="mr-4 ">First Name</label>
                <label className="pl-56">Last Name</label>
              </div>
              <div className="flex">
                <input
                  type="text"
                  className="mr-4 p-2 w-72 border rounded-md"
                />
                <input
                  type="text"
                  className="p-2 ml-4  w-72 border rounded-md"
                />
              </div>
              <label className="mb-2 mt-1">Email Address</label>
              <input type="email" className="p-2 w-full border rounded-md" />
              <label className="mb-2 mt-1">Phone</label>
              <input type="number" className="p-2 w-full border rounded-md" />
              <label className="mb-2 mt-1">Pledge Amount</label>
              <input type="number" className="p-2 w-full border rounded-md" />
              <label className="mb-2 mt-1">Message</label>
              <textarea
                className="font-open-sans font-medium p-2 border rounded-md"
                rows="4"
                cols="50"
                type="message"
              />
            </div>
            <button
              onClick={handleSubmit}
              className="bg-green-600 hover:bg-green-700 text-white rounded-sm mt-5 mb-2 pt-2 pb-2 pl-2 pr-2"
            >
              Donate Now
            </button>
          </div>
        </div>
        <Popup isOpen={showPopup} onClose={closePopup} />
      </FormikProvider>
    </>
  );
}

export default DonationForm;
