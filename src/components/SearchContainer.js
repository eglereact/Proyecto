import { useDispatch, useSelector } from "react-redux";
import { FormRow, FormRowSelect } from "./index";
import { AiOutlineSearch, AiOutlineSortAscending } from "react-icons/ai";
import { GoBook } from "react-icons/go";
import { GrStatusPlaceholder } from "react-icons/gr";
import { handleChange, clearFilters } from "../features/allJobs/allJobsSlice";

function SearchContainer() {
  const { isLoading, search, searchStatus, searchType, sort, sortOptions } =
    useSelector((store) => store.allJobs);
  const { jobTypeOptions, statusOptions } = useSelector((store) => store.job);
  const dispach = useDispatch();

  const handleSearch = (e) => {
    dispach(handleChange({ name: e.target.name, value: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispach(clearFilters());
  };
  return (
    <div className="bg-white mx-5 rounded-lg p-5 mt-5">
      <form>
        <h1 className="text-2xl text-[#3F3D56]">Search Form</h1>
        <div>
          <FormRow
            icon={<AiOutlineSearch />}
            type="text"
            name="search"
            label="Search"
            value={search}
            handleChange={handleSearch}
          />
          <div className="flex space-x-1 sm:space-x-4">
            <FormRowSelect
              icon={<GrStatusPlaceholder />}
              label="Status"
              name="searchStatus"
              value={searchStatus}
              handleChange={handleSearch}
              list={["all", ...statusOptions]}
            />
            <FormRowSelect
              icon={<GoBook />}
              label="Type"
              name="searchType"
              value={searchType}
              handleChange={handleSearch}
              list={["all", ...jobTypeOptions]}
            />
            <FormRowSelect
              icon={<AiOutlineSortAscending />}
              label="Sort"
              name="sort"
              value={sort}
              handleChange={handleSearch}
              list={sortOptions}
            />
          </div>
          <button
            disabled={isLoading}
            onClick={handleSubmit}
            className="form-button"
          >
            clear filters
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchContainer;
