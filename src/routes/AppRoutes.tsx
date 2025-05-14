import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Contact } from "../pages/Contact/Contact";
import { Projects } from "../pages/Projects/Projects";
import { Styles } from "../pages/Styles/Styles";
import { News } from "../pages/News/News";
import { OurStory } from "../pages/OurStory/OurStory";
import { NotFound } from "../pages/NotFound/NotFound";

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/styles" element={<Styles />} />
                <Route path="/news" element={<News />} />
                <Route path="/ourStory" element={<OurStory />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}
export default AppRoutes;
