import HomeLayout from "../Layout/HomeLayout";
import HomePage from "../Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import NotFound from "../Pages/Notfound";
import MemberLoginPage from "../Modules/Member/pages/memberLogin";
import MemberDashboard from "../Modules/Member/pages/memberDashboard";
import MemberLayout from "../Layout/MemberLayout";
import AllNewsPage from "../Modules/News/AllNewsPage";
import MemberNewsPage from "../Modules/Member/pages/memberNewsPage";
import MemberEventsPage from "../Modules/Member/pages/memberEventsPage";
import CreateMemberPage from "../Modules/Member/module/createMemberPage";
import AllEventsPage from "../Modules/Events/allEvents";
const Routing = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<HomeLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<MemberLoginPage />} />
        <Route path="/allNews" element={<AllNewsPage />} />
        <Route path="/allEvents" element={<AllEventsPage/>}/>
        <Route path="/memberCreatePage" element={<CreateMemberPage />} />
      </Route>
      <Route path="/memberDashboard/:id" element={<MemberLayout />}>
        <Route index element={<MemberDashboard />} />
        <Route path="memberNewsPage" element={<MemberNewsPage />} />
        <Route path="memberEvents" element={<MemberEventsPage />} />
      </Route>
    </Routes>
  );
};

export default Routing;
