import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Contact } from "../pages/Contact/Contact";
import { Projects } from "../pages/Projects/Projects";
import { Styles } from "../Styles/Styles";
import { News } from "../pages/News/News";
import { OurStory } from "../pages/OurStory/OurStory";
import { NotFound } from "../pages/NotFound/NotFound";
import MainLayout from "../layouts/MainLayout";
import { Admin } from "../pages/Admin/Admin";

const AppRoutes = () => {
    return (
        <Routes >
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/styles" element={<Styles />} />
                <Route path="/news" element={<News />} />
                <Route path="/ourStory" element={<OurStory />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin" element={<Admin />} />
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
export default AppRoutes;
