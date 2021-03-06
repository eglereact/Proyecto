import { useState, useEffect } from "react";
import { Logo, FormRow } from "./../components";
import { AiOutlineMail, AiOutlineLock, AiOutlineUser } from "react-icons/ai";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

function Register() {
  const [values, setValues] = useState(initialState);
  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { isMember, name, email, password } = values;
    if (!email || !password || (!isMember && !name)) {
      toast.error("Please fill out all fields");
      return;
    }
    if (isMember) {
      dispatch(loginUser({ email: email, password: password }));
      return;
    }
    dispatch(registerUser({ name, email, password }));
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [user]);

  return (
    <div className="bg-gray-200 h-screen flex items-center justify-center">
      <form
        onSubmit={onSubmit}
        className="w-[90vw] max-w-[400px] flex flex-col items-center justify-center border
        bg-gray-100 border-gray-300 rounded-lg p-5 shadow-md "
      >
        <Logo />
        <h3 className="text-2xl font-bold text-[#A07265] my-2">
          {values.isMember ? "Login" : "Register"}
        </h3>
        {!values.isMember && (
          <FormRow
            icon={<AiOutlineUser />}
            type="text"
            name="name"
            label="Name"
            handleChange={handleChange}
            placeholder="Jonny"
            value={values.name}
          />
        )}

        <FormRow
          icon={<AiOutlineMail />}
          type="email"
          name="email"
          label="Email"
          handleChange={handleChange}
          placeholder="name@example.com"
          value={values.email}
        />
        <FormRow
          icon={<AiOutlineLock />}
          type="password"
          name="password"
          label="Password"
          handleChange={handleChange}
          placeholder="********"
          value={values.password}
        />
        <div className="flex flex-col sm:flex-row sm:space-x-8 mt-8">
          <button
            type="submit"
            className="relative inline-block w-32 py-3 font-bold text-[#2F2E41] group mb-5 sm:mb-0"
            disabled={isLoading}
          >
            <span
              className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2
             bg-[#A07265] group-hover:translate-x-0 group-hover:translate-y-0"
            ></span>
            <span className="absolute inset-0 w-full h-full border-4 border-[#2F2E41]"></span>
            <span className="relative">
              {isLoading ? "Loading..." : "Submit"}
            </span>
          </button>
          <button
            type="button"
            className="relative inline-block w-32 py-3 font-bold text-[#2F2E41] group"
            disabled={isLoading}
            onClick={() =>
              dispatch(
                loginUser({ email: "testUser@test.com", password: "secret" })
              )
            }
          >
            <span
              className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2
            bg-[#A07265] group-hover:translate-x-0 group-hover:translate-y-0"
            ></span>
            <span className="absolute inset-0 w-full h-full border-4 border-[#2F2E41]"></span>
            <span className="relative">
              {isLoading ? "Loading..." : "Demo App"}
            </span>
          </button>
        </div>
        <p className="text-gray-800 mt-5 text-center">
          {values.isMember ? "Not a member yet? " : "Already a member? "}

          <button
            type="button"
            onClick={toggleMember}
            className="text-[#A07265] font-bold hover:text-[#2F2E41]"
          >
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </div>
  );
}

export default Register;
