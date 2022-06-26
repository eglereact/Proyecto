import { useState } from "react";
import { useSelector } from "react-redux";
import BarChart from "./BarChart";
import AreaChart from "./AreaChart";

function ChartsContainer() {
  const [barChart, setBarChart] = useState(true);
  const { monthlyApplications: data } = useSelector((store) => store.allJobs);
  return (
    <div className=" text-center mt-5">
      <h1 className="text-2xl text-[#3F3D56]">Monthly Applications</h1>
      <button
        type="button"
        onClick={() => setBarChart(!barChart)}
        className="text-xl text-gray-600 hover:text-gray-800"
      >
        {barChart ? "Area Chart" : "Bar Chart"}
      </button>
      {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </div>
  );
}

export default ChartsContainer;
