import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Contact } from "../pages/Contact/Contact";

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                {/* <Route path="*" element={<NotFoundRoute />} /> */}
            </Routes>
        </>
    )
}
export default AppRoutes;
