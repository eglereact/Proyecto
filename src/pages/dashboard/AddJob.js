import { FormRow, FormRowSelect } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { BsBriefcase, BsBuilding } from "react-icons/bs";
import { GoLocation, GoBook } from "react-icons/go";
import { GrStatusPlaceholder } from "react-icons/gr";
import {
  clearValues,
  createJob,
  handleChange,
} from "../../features/job/jobSlice";
import { useEffect } from "react";

function AddJob() {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobTypeOptions,
    jobType,
    statusOptions,
    status,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job);
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!position || !company || !jobLocation) {
      toast.error("Please fill out all the fields");
      return;
    }
    dispatch(createJob({ position, company, jobLocation, jobType, status }));
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };

  useEffect(() => {
    if (!isEditing) {
      dispatch(handleChange({ name: "jobLocation", value: user.location }));
    }
  }, []);

  return (
    <section>
      <form>
        <h3 className="title-header">{isEditing ? "edit job" : "add job"}</h3>
        <div className="sm:w-2/3 m-5">
          <FormRow
            icon={<BsBriefcase />}
            type="text"
            name="position"
            label="position"
            placeholder="Web Developer"
            value={position}
            handleChange={handleJobInput}
          />
          <FormRow
            icon={<BsBuilding />}
            type="text"
            name="company"
            label="Company"
            placeholder="Apple"
            value={company}
            handleChange={handleJobInput}
          />

          <FormRow
            icon={<GoLocation />}
            type="text"
            name="jobLocation"
            placeholder="New York"
            label="Job Location"
            value={jobLocation}
            handleChange={handleJobInput}
          />
          <FormRowSelect
            list={statusOptions}
            label="status"
            name="status"
            handdleChange={handleJobInput}
            value={status}
            icon={<GrStatusPlaceholder />}
          />
          <FormRowSelect
            name="jobType"
            label="Job Type"
            value={jobType}
            handdleChange={handleJobInput}
            list={jobTypeOptions}
            icon={<GoBook />}
          />
          <div className="space-x-3">
            <button
              type="button"
              onClick={() => dispatch(clearValues())}
              className="form-button"
            >
              Clear
            </button>
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={isLoading}
              className="form-button"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default AddJob;
