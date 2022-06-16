import { IoShieldHalf } from "react-icons/io5";
import { FaBriefcase, FaIdCardAlt } from "react-icons/fa";
import { MdComputer } from "react-icons/md";

function JobAvatar({ jobType }) {
  if (jobType === "remote") {
    return <div className="job-avatar">{<MdComputer />}</div>;
  }

  if (jobType === "part-time") {
    return (
      <div className="job-avatar">
        <IoShieldHalf />
      </div>
    );
  }

  if (jobType === "internship") {
    return (
      <div className="job-avatar">
        <FaIdCardAlt />
      </div>
    );
  }

  return (
    <div className="job-avatar">
      <FaBriefcase />
    </div>
  );
}

export default JobAvatar;
