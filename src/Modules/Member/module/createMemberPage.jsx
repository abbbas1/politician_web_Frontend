import { Field, FormikProvider, useFormik, ErrorMessage } from "formik";
import { mixed, object, string } from "yup";
import { ToastContainer } from "react-toastify";
import AxiosInstance from "../../../utils/axios";

const memberSchema = object({
  memberName: string().min().max().required(),
  memberEmail: string().min().max().required(),
  memberCnic: string().min().max().required(),
  memberPhoneNumber: string().min().max().required(),
  password: string().min().max().required(),
  memberAddress: string().min().max().required(),
  File: mixed()
    .required()
    .test(
      "FILE_SIZE",
      "File is too big",
      (value) => value && value.size < 10800 * 10800
    )
    .test(
      "FILE_TYPE",
      "Invalid file type",
      (value) => value && ["image/jpeg", "image/png"].includes(value.type)
    ),
});
function CreateMemberPage() {
  const handleSubmit = async (data) => {
    // console.log(data,"data");
    const formData = new FormData();
    formData.append("memberName", data.memberName);
    formData.append("memberEmail", data.memberEmail);
    formData.append("memberCnic", data.memberCnic);
    formData.append("memberPhoneNumber", data.memberPhoneNumber);
    formData.append("password", data.password);
    formData.append("memberAddress", data.memberAddress);
    formData.append("File", data.File);

    const response = await AxiosInstance.post("/member/member/register", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response,"response");
  };

  const formik = useFormik({
    initialValues: {
      memberName: "",
      memberEmail: "",
      memberCnic: "",
      memberPhoneNumber: "",
      password: "",
      memberAddress: "",
      File: "",
    },
    onSubmit: (values) => handleSubmit(values),
});
  return (
    <div className=" h-screen flex items-center justify-center">
      <div className="bg-stone-50 p-8 rounded shadow-2xl w-96">
      <h1 className="text-2xl font-bold mb-4 text-green-500">Become Member</h1>
        <FormikProvider value={formik}>
          <form>
            <Field
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-green-400"
              name="memberName"
              placeholder="Enter Your Name"
            />
            <ErrorMessage name="memberName" />
            <br />
            <Field
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-green-400"
              name="memberEmail"
              placeholder="Email"
            />
            <ErrorMessage name="memberEmail" />
            <br />
            <Field
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-green-400"
              type="password"
              name="password"
              placeholder="password"
            />
            <ErrorMessage name="password" />
            <br />
            <Field
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-green-400"
              name="memberCnic"
              placeholder="memberCnic"
            />
            <ErrorMessage name="memberCnic" />
            <br />
            <Field
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-green-400"
              name="memberPhoneNumber"
              placeholder="memberPhoneNumber"
            />
            <ErrorMessage name="memberPhoneNumber" />
            <br />
            <Field
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring"
              name="memberAddress"
              placeholder="memberAddress"
            />
            <ErrorMessage name="memberAddress" />
            <br />
            <input
            className="pt-2"
              type="file"
              name="File"
              onChange={(e) => formik.setFieldValue("File", e.target.files[0])}
            />
            <ErrorMessage name="File" />
            <br />
            <p className="">Please enter your info</p>
            <br />
            <button type="submit" className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 " onClick={formik.handleSubmit}>
              Register
            </button>
            <ToastContainer />
          </form>
        </FormikProvider>
      </div>
    </div>
  );
}
export default CreateMemberPage;
