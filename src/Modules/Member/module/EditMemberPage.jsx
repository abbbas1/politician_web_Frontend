import { object, string } from "yup";
import { ErrorMessage, FormikProvider, Field, useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AxiosInstance from "../../../utils/axios";

const editSchema = object({
  memberName: string().required().min(3).max(30),
  memberEmail: string().required().min(4).max(20),
  password: string().required().min(7).max(25),
  memberAddress: string().min(6).max(34).required(),
  memberCnic: string().min(7).max(19).required(),
  memberPhoneNumber: string().min(7).max(19).required(),
});

const MemberEditPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const getMemberCall = async () => {
    const response = await AxiosInstance.get(`/member/getone/` + id);
    // toast.success(response.data.message)
    formik.setValues(response.data.admin);
    delete response.data.admin.password;
  };

  const handleUpdateMember = async (data) => {
    try {
      const response = await AxiosInstance.put(`/member/update/${id}`, data);
      console.log(response);
      if (response.status == 200) {
        navigate("/adminDashboard");
      }
      toast.success(response.data.message);
      formik.resetForm();
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  const formik = useFormik({
    initialValues: { memberName: "", memberEmail: "", password: "",memberPhoneNumber:"",memberCnic:"",memberAddress:"" },
    validationSchema: editSchema,
    onSubmit: (values) => handleUpdateMember(values),
  });
  useEffect(() => {
    getMemberCall();
  }, [id]);
  return (
    <FormikProvider value={formik}>
    <form className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Edit Ember</h2>
  
      {/* Email and Password in one row */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <Field name="memberEmail" placeholder="Email" className="w-full p-2 border rounded" />
          <ErrorMessage name="memberEmail" className="text-red-500" />
        </div>
        <div>
          <Field name="password" type="password" placeholder="Password" className="w-full p-2 border rounded" />
          <ErrorMessage name="password" className="text-red-500" />
        </div>
      </div>
  
      {/* CNIC and Phone Number in one row */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <Field name="memberPhoneNumber" type="tel" placeholder="Phone Number" className="w-full p-2 border rounded" />
          <ErrorMessage name="memberPhoneNumber" className="text-red-500" />
        </div>
        <div>
          <Field name="memberCnic" type="text" placeholder="CNIC" className="w-full p-2 border rounded" />
          <ErrorMessage name="memberCnic" className="text-red-500" />
        </div>
      </div>
  
      <Field name="memberAddress" type="text" placeholder="Address" className="w-full p-2 border rounded mb-4" />
      <button type="submit" onClick={formik.handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
        Edit
      </button>
  
      <ToastContainer />
    </form>
  </FormikProvider>
  
  );
};

export default MemberEditPage;
