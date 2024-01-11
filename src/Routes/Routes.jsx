import HomeLayout from "../Layout/HomeLayout";
import HomePage from "../Pages/HomePage";
import {Route,Routes} from 'react-router-dom'
import NotFound from "../Pages/Notfound";
import MemberLoginPage from "../Modules/Admin/pages/memberLogin";
const Routing = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound/>} />
      <Route path="/" element={<HomeLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<MemberLoginPage/>}/>
      </Route>
    </Routes>
  );
};

export default Routing;
