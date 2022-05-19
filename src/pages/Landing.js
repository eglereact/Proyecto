import { Link } from "react-router-dom";
import { Logo } from "../components";
import landing from "./../images/landing.svg";

function Landing() {
  return (
    <main className="bg-gray-200 h-screen">
      <nav className="max-w-5xl mx-auto py-2 px-5">
        <Logo />
      </nav>
      <div className="max-w-5xl mx-auto px-5 pt-5 md:pt-10 flex flex-col sm:flex-row items-center justify-center">
        <div className="w-full lg:w-1/2 mr-5Name">
          <h1 className="text-2xl text-gray-800 font-bold my-5">
            Project <span className="text-[#A07265] ">Tracking</span> App
          </h1>
          <p className="text-[#3F3D56]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis
            pretium nunc, quis cursus nunc. Curabitur sed ipsum tincidunt,
            sagittis libero vitae, commodo risus. In maximus dui at nisl semper
            tincidunt. Nullam non diam lectus. Vestibulum cursus imperdiet
            finibus. Fusce pretium, nisi id euismod pulvinar, neque erat
            scelerisque lacus, in euismod augue neque eu odio. Vivamus laoreet
            accumsan risus, sed placerat massa consequat ac.
          </p>
          <Link
            to="/register"
            className="relative inline-block px-6 py-3 font-bold text-[#2F2E41] group mt-10"
          >
            <span
              className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2
             bg-[#A07265] group-hover:translate-x-0 group-hover:translate-y-0"
            ></span>
            <span className="absolute inset-0 w-full h-full border-4 border-[#2F2E41]"></span>
            <span className="relative">Sign In / Sign Up</span>
          </Link>
        </div>
        <div className="lg:w-1/2">
          <img
            src={landing}
            alt="landing"
            className="w-full hidden sm:block m-10"
          />
        </div>
      </div>
    </main>
  );
}

export default Landing;
