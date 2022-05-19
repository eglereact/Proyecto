import { Link } from "react-router-dom";
import notFound from "./../images/error.svg";

function Error() {
  return (
    <div className="bg-gray-200 h-screen text-gray-800 flex flex-col items-center justify-center">
      <img src={notFound} alt="not found" className="h-1/2" />
      <h1 className="text-2xl font-bold mt-5">Ohh! Page Not Found</h1>
      <p className="text-center my-3">
        We can't find the page you're looking for
      </p>
      <Link
        to="/"
        className="bg-[#A07265] px-4 py-2 rounded-lg hover:bg-[#3F3D56] text-white"
      >
        back home
      </Link>
    </div>
  );
}

export default Error;
