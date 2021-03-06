import { useState } from "react";
import { FormRow } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { updateUser } from "../../features/user/userSlice";
import { AiOutlineUser, AiOutlineMail, AiOutlineIdcard } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

function Profile() {
  const { isLoading, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    lastName: user?.lastName || "",
    location: user?.location || "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, lastName, location } = userData;
    if (!name || !email || !lastName || !location) {
      toast.error("Please fill out all the fields");
      return;
    }
    dispatch(updateUser(userData));
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h1 className="title-header">Profile</h1>
        <div className="sm:w-2/3 mx-5">
          <FormRow
            icon={<AiOutlineUser />}
            type="text"
            name="name"
            label="Name"
            handleChange={handleChange}
            value={userData.name}
          />
          <FormRow
            icon={<AiOutlineIdcard />}
            type="text"
            placeholder="last name"
            name="lastName"
            labelText="last name"
            label="Name"
            value={userData.lastName}
            handleChange={handleChange}
          />
          <FormRow
            icon={<AiOutlineMail />}
            type="email"
            name="email"
            label="Email"
            value={userData.email}
            handleChange={handleChange}
          />
          <FormRow
            icon={<GoLocation />}
            type="text"
            name="location"
            label="Location"
            value={userData.location}
            handleChange={handleChange}
          />
          <button type="submit" disabled={isLoading} className="form-button">
            {isLoading ? "loading..." : "save changes"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default Profile;
