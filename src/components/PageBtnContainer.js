import { useDispatch, useSelector } from "react-redux";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { changePage } from "../features/allJobs/allJobsSlice";

function PageBtnContainer() {
  const { numOfPages, page } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  const pages = Array.from({ length: numOfPages }, (_, index) => index + 1);

  const nextPage = () => {
    let newPage = page + 1;
    if (newPage > numOfPages) {
      newPage = 1;
    }
    dispatch(changePage(newPage));
  };
  const prevPage = () => {
    let newPage = page - 1;
    if (newPage < 1) {
      newPage = numOfPages;
    }
    dispatch(changePage(newPage));
  };

  return (
    <div className="flex items-center justify-center mb-8 space-x-2">
      <button type="button" onClick={prevPage} className="form-button ">
        <AiOutlineDoubleLeft />
        Prev
      </button>
      {pages.map((pageNumber) => {
        return (
          <button
            type="button"
            className={
              pageNumber === page
                ? "pagination text-white bg-[#3F3D56] hover:bg-[#A07265]"
                : "pagination"
            }
            key={pageNumber}
            onClick={() => dispatch(changePage(pageNumber))}
          >
            {pageNumber}
          </button>
        );
      })}
      <button type="button" className="form-button" onClick={nextPage}>
        Next
        <AiOutlineDoubleRight />
      </button>
    </div>
  );
}

export default PageBtnContainer;
