import { object, string } from "yup";
import { ErrorMessage, Field, FormikProvider, useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import AxiosInstance from "../../../utils/axios";
import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from "react-router-dom";
const memberLoginSchema = object({
  memberEmail: string().required("Email is a required field"),
  password: string().required(),
});
const MemberLoginPage = () => {

  const handleLogin = async (data) => {
    try {
      const response = await AxiosInstance.post("http://localhost:3344/member/login",data)
      toast.success(response.data.message);
      formik.resetForm()
    } catch (error) {
    toast.error(error.response?.data.message);
    }
  };
  const formik = useFormik({
    initialValues:{memberEmail:"",password:""},
    validationSchema:memberLoginSchema,
    onSubmit:(values)=>{
        handleLogin(values)
    }
  })

  return (
    <>
      <div className=" h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-lg w-96">
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
            <ToastContainer/>
          </FormikProvider>
        </div>
      </div>
    </>
  );
};

export default MemberLoginPage;
