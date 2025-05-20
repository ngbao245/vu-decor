import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Outlet />
    </div>
  );
};

export default AdminLayout; 