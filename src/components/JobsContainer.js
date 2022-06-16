import { useEffect } from "react";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import { getAllJobs } from "../features/allJobs/allJobsSlice";

function JobsContainer() {
  const { jobs, isLoading } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
  }, []);

  if (isLoading) {
    return (
      <div>
        <Loading center />
      </div>
    );
  }

  if (jobs.length === 0) {
    return (
      <div>
        <h2>No jobs to display...</h2>
      </div>
    );
  }

  return (
    <div>
      <h5 className="title-header">Jobs info</h5>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 m-5">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
    </div>
  );
}

export default JobsContainer;
