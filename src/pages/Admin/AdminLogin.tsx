import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MdEmail,
  MdLock,
  MdInfo,
  MdArrowBack,
  MdVisibility,
  MdVisibilityOff,
} from "react-icons/md";
import cms from "../../assets/cms4.png";

interface LoginError {
  email?: string;
  password?: string;
}

// Demo accounts
const DEMO_ACCOUNTS = [
  {
    email: "admin@vudecor.com",
    password: "admin123",
    role: "Admin",
  },
  {
    email: "editor@vudecor.com",
    password: "editor123",
    role: "Editor",
  },
];

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<LoginError>({});
  const [showDemoAccounts, setShowDemoAccounts] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validateForm = (): boolean => {
    const newErrors: LoginError = {};

    if (!email) {
      newErrors.email = "Email là bắt buộc";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email không hợp lệ";
    }

    if (!password) {
      newErrors.password = "Mật khẩu là bắt buộc";
    } else if (password.length < 6) {
      newErrors.password = "Mật khẩu phải có ít nhất 6 ký tự";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const account = DEMO_ACCOUNTS.find(
        (acc) => acc.email === email && acc.password === password
      );

      if (!account) {
        throw new Error("Thông tin đăng nhập không chính xác");
      }

      localStorage.setItem("adminToken", "demo-token");
      localStorage.setItem(
        "adminUser",
        JSON.stringify({
          email: account.email,
          role: account.role,
        })
      );

      navigate("/admin");
    } catch (error) {
      console.log("Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin!");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDemoAccountClick = (account: (typeof DEMO_ACCOUNTS)[0]) => {
    setEmail(account.email);
    setPassword(account.password);
    setShowDemoAccounts(false);
  };

  return (
    <div className="min-h-screen w-full flex bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Left Side - Decorative Image */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGMwIDIuMjA5LTEuNzkxIDQtNCA0cy00LTEuNzkxLTQtNCAxLjc5MS00IDQtNCA0IDEuNzkxIDQgNHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-20 z-0" />

        {/* Background overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B4513]/90 via-[#8B4513]/70 to-black/80 z-10" />

        {/* Main image with parallax effect */}
        <div className="relative h-full group">
          <img
            src={cms}
            alt="Luxury Interior"
            className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-700"
          />
          {/* Image overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-12 z-20">
          {/* Logo or Brand Name */}
          <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
            <h1 className="text-5xl font-serif text-white mb-3 tracking-wide">
              VuDecor
              <span className="text-[#FFD700]">.</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FFD700] to-transparent rounded-full"></div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 transform hover:scale-105 transition-all duration-300 hover:bg-white/20 group">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-[#FFD700]/20 flex items-center justify-center mr-3 group-hover:bg-[#FFD700]/30 transition-colors">
                  <svg
                    className="w-5 h-5 text-[#FFD700]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-medium text-lg">
                  Quản lý bài viết
                </h3>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Tạo, chỉnh sửa và xuất bản bài viết với giao diện trực quan và
                dễ sử dụng
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 transform hover:scale-105 transition-all duration-300 hover:bg-white/20 group">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full bg-[#FFD700]/20 flex items-center justify-center mr-3 group-hover:bg-[#FFD700]/30 transition-colors">
                  <svg
                    className="w-5 h-5 text-[#FFD700]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-medium text-lg">
                  Phân loại bài viết
                </h3>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Tổ chức và phân loại bài viết theo danh mục, thẻ và trạng thái
                xuất bản
              </p>
            </div>
          </div>

          {/* Main message */}
          <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl border border-white/20 transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-[#8B4513]/10 flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-[#8B4513]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-[#8B4513]">
                Quản lý nội dung chuyên nghiệp
              </h2>
            </div>
            <h5 className="text-gray-700 leading-relaxed pl-16 text-justify">
              Hệ thống quản lý nội dung hiện đại giúp bạn tạo, chỉnh sửa <br />
              và quản lý bài viết một cách hiệu quả và chuyên nghiệp
            </h5>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-serif text-gray-800 mb-3">
              Chào mừng trở lại
            </h2>
            <p className="text-gray-600 text-lg">
              Đăng nhập vào hệ thống quản trị
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-2xl p-10 backdrop-blur-lg bg-opacity-90"
          >
            <div className="space-y-7">
              {/* Email Field */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MdEmail className="h-5 w-5 text-gray-400 group-hover:text-[#8B4513] transition-colors" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`block w-full pl-10 pr-3 py-3.5 border ${
                      errors.email ? "border-red-500" : "border-gray-200"
                    } rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:border-[#8B4513] transition-all duration-200 bg-gray-50`}
                    placeholder="admin@vudecor.com"
                    required
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <MdInfo className="mr-1" /> {errors.email}
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mật khẩu
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MdLock className="h-5 w-5 text-gray-400 group-hover:text-[#8B4513] transition-colors" />
                  </div>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`block w-full pl-10 pr-12 py-3.5 border ${
                      errors.password ? "border-red-500" : "border-gray-200"
                    } rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:border-[#8B4513] transition-all duration-200 bg-gray-50`}
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-[#8B4513] transition-colors"
                  >
                    {showPassword ? (
                      <MdVisibilityOff className="h-5 w-5" />
                    ) : (
                      <MdVisibility className="h-5 w-5" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <MdInfo className="mr-1" /> {errors.password}
                  </p>
                )}
              </div>

              {/* Demo Accounts Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowDemoAccounts(!showDemoAccounts)}
                  className="w-full text-left text-sm text-gray-600 hover:text-[#8B4513] transition-colors flex items-center"
                >
                  <MdInfo className="h-4 w-4 mr-1" />
                  Tài khoản demo
                  <svg
                    className={`ml-1 h-4 w-4 transition-transform ${
                      showDemoAccounts ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {showDemoAccounts && (
                  <div className="absolute z-10 mt-2 w-full bg-white rounded-xl shadow-lg border border-gray-200 py-2">
                    {DEMO_ACCOUNTS.map((account) => (
                      <button
                        key={account.email}
                        type="button"
                        onClick={() => handleDemoAccountClick(account)}
                        className="w-full px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#8B4513] transition-colors text-left"
                      >
                        <span className="font-medium">{account.role}:</span>{" "}
                        {account.email}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full bg-[#8B4513] text-white py-4 px-4 rounded-xl hover:bg-[#6B3410] focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02] ${
                  isLoading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-t-2 border-white border-solid rounded-full animate-spin mr-2"></div>
                    Đang xử lý...
                  </div>
                ) : (
                  "Đăng nhập"
                )}
              </button>
            </div>
          </form>

          {/* Back to Home Button */}
          <div className="mt-6 text-center">
            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center text-gray-600 hover:text-[#8B4513] transition-colors duration-200 group"
            >
              <MdArrowBack className="mr-2 transform group-hover:-translate-x-1 transition-transform duration-200" />
              <span>Quay về trang chủ</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
