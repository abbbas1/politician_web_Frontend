import { object, string } from "yup";
import { ErrorMessage, Field, FormikProvider, useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import AxiosInstance from "../../../utils/axios";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
const memberLoginSchema = object({
  memberEmail: string().required("Email is a required field"),
  password: string().required("Password is a required field"),
});
const MemberLoginPage = () => {
  const Navigate = useNavigate();
  const handleLogin = async (data) => {
    try {
      const response = await AxiosInstance.post(
        "/member/login",
        data
      );
      toast.success(response.data.message);
      // console.log(response.data.Member.id)
      const id = response.data.Member.id;
      formik.resetForm();
      if (response.data.message == "Logged in successfully") {
        Navigate(`/memberDashboard/${id}/`);
      }
    } catch (error) {
      toast.error(error.response?.data.message);
    }
  };
  const formik = useFormik({
    initialValues: { memberEmail: "", password: "" },
    validationSchema: memberLoginSchema,
    onSubmit: (values) => {
      handleLogin(values);
    },
  });

  return (
    <>
      <div className=" h-screen flex items-center justify-center">
        <div className="bg-stone-50 p-8 rounded shadow-2xl w-96">
          <FormikProvider value={formik}>
            <h1 className="text-2xl font-bold mb-4 text-green-500">Login</h1>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <Field
                name="memberEmail"
                className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-green-400"
              />
              <ErrorMessage name="memberEmail" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <Field
                name="password"
                type="password"
                className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-green-400"
              />
              <ErrorMessage name="password" />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 "
              onClick={formik.handleSubmit}
            >
              Login
            </button>
            <div className="flex justify-center pt-4 items-center">
            <p className="">Did not have account?</p>
            <button className="text-green-600 font-bold text-lg hover:underline" onClick={()=>Navigate("/memberCreatePage")}>Become Member</button>
            </div>
            <ToastContainer />
          </FormikProvider>
        </div>
      </div>
    </>
  );
};

export default MemberLoginPage;
