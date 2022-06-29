import { useEffect } from "react";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import { getAllJobs } from "../features/allJobs/allJobsSlice";
import PageBtnContainer from "./PageBtnContainer";

function JobsContainer() {
  const {
    jobs,
    isLoading,
    page,
    totalJobs,
    numOfPages,
    search,
    searchStatus,
    searchType,
    sort,
  } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
  }, [page, search, searchStatus, searchType, sort]);

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
        <h2 className="ml-5 mt-5 text-2xl text-[#3F3D56]">
          No jobs to display...
        </h2>
      </div>
    );
  }

  return (
    <div>
      <h5 className="title-header">
        {totalJobs} job{jobs.length > 1 && "s"} found
      </h5>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 m-5">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </div>
  );
}

export default JobsContainer;
