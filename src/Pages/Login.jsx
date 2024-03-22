import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";
import SocialLogin from "../components/SocialLogin";

const Login = () => {
  const { loginUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((res) => {
        const user = res.user;
        if (user.email) {
          toast.success("Successfully toasted!");
          navigate(`${location.state ? location.state : "/"}`);
        }
      })
      .catch((error) => {
        toast.error(`${error.message}`);
      });
  };
  return (
    <div className="w-full max-w-md p-8 mt-10 space-y-3 rounded-xl border bg-white   font-sans mx-auto">
      <h1 className="text-3xl font-bold text-center text-indigo-600">Login</h1>
      {/* Input fields and the form started */}
      <form onSubmit={handleLogIn} action="" className="space-y-6">
        <div className="space-y-2 text-sm">
          <label htmlFor="email" className="block ">
            Your Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
          />
        </div>
        <div className="space-y-2 text-sm">
          <label htmlFor="password" className="block ">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  "
          />
          <div className="flex justify-end text-xs ">
            <a href="#" className="hover:underline">
              Forgot Password?
            </a>
          </div>
        </div>
        {/* Sign in Button */}
        <button
          type="submit"
          className="text-lg rounded-xl relative p-[10px] block w-full bg-indigo-600 text-white border-y-4 duration-500 overflow-hidden focus:border-indigo-500 z-50 group"
        >
          Log In
          <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-white">
            Log In
          </span>
          <span className="bg-indigo-800 absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
          <span className="bg-indigo-800 absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
          <span className="bg-indigo-800 absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
          <span className="bg-indigo-800 absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
        </button>
      </form>
      <div className="flex items-center pt-4 space-x-2">
        <div className="flex-1 h-px bg-gray-300"></div>
        <p className="text-sm text-gray-600">Login with social accounts</p>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>
      {/* Social icons */}
      <div className="flex justify-center space-x-4">
        <SocialLogin />
      </div>
      <p className="text-sm text-center gap-2 flex justify-center sm:px-6 ">
        Don&apos;t have an account?
        <Link to="/register" className="font-medium hover:text-indigo-600">
          Register Now
        </Link>
      </p>
    </div>
  );
};

export default Login;
