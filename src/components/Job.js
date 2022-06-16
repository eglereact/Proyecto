import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import JobInfo from "./JobInfo";
import { GoLocation } from "react-icons/go";
import { AiOutlineCalendar, AiOutlineLaptop } from "react-icons/ai";
import moment from "moment";
import JobAvatar from "./JobAvatar";

function Job({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  status,
}) {
  const dispatch = useDispatch();
  const date = moment(createdAt).format("MMM Do, YYYY");
  return (
    <div className="w-full bg-white rounded-lg shadow-md p-4">
      <header className="flex items-center ">
        <JobAvatar jobType={jobType} />
        <div className="ml-4  capitalize">
          <h1 className="font-bold text-[#3F3D56]">{position}</h1>
          <p className="text-sm text-[#A07265]">{company}</p>
        </div>
      </header>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 ml-2 my-4">
          <JobInfo text={jobLocation} icon={<GoLocation />} />
          <JobInfo text={date} icon={<AiOutlineCalendar />} />
          <JobInfo text={jobType} icon={<AiOutlineLaptop />} />
          <div className={`status ${status}`}>{status}</div>
        </div>
        <footer>
          <div className="space-x-2">
            <Link
              className="form-button"
              to="/add-job"
              onClick={() => console.log("Edit the job")}
            >
              Edit
            </Link>
            <button
              className="form-button"
              type="button"
              onClick={() => console.log("Delete")}
            >
              Delete
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Job;
