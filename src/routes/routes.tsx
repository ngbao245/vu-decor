import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Projects } from "../pages/Projects/Projects";
import { ProjectDetail } from "../pages/Projects/ProjectDetail";
// import { News } from "../pages/News/News";
import { OurStory } from "../pages/OurStory/OurStory";
import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";
import AdminLogin from "../pages/Admin/AdminLogin";
import { Admin } from "../pages/Admin/Admin";
import ContactUs from "../pages/ContactUs/ContactUs";
import NotFound from "../components/NotFound/NotFound";
import Styles from "../pages/Styles/Styles";
import { Services } from "../pages/Services/Services";

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:id" element={<ProjectDetail />} />
                <Route path="/styles" element={<Styles />} />
                {/* <Route path="/news" element={<News />} /> */}
                <Route path="/services" element={<Services />} />
                <Route path="/ourStory" element={<OurStory />} />
                <Route path="/contact" element={<ContactUs />} />
            </Route>

            <Route element={<AdminLayout />}>
                <Route path="/admin-login" element={<AdminLogin />} />
                <Route path="/admin" element={<Admin />} />
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
export default AppRoutes;
