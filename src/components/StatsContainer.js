import StatsItem from "./StatsItem";
import { GoLocation } from "react-icons/go";
import { BiErrorCircle, BiCalendarEvent, BiLoaderCircle } from "react-icons/bi";
import { useSelector } from "react-redux";

function StatsContainer() {
  const { stats } = useSelector((store) => store.allJobs);

  const defaultStats = [
    {
      id: 1,
      title: "pending applications",
      count: stats.pending || 0,
      icon: <BiLoaderCircle />,
      color: "brown",
    },
    {
      id: 2,
      title: "interviews scheduled",
      count: stats.interview || 0,
      icon: <BiCalendarEvent />,
      color: "blue",
    },
    {
      id: 3,
      title: "jobs declined",
      count: stats.declined || 0,
      icon: <BiErrorCircle />,
      color: "red",
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between my-5 sm:space-x-5">
      {defaultStats.map((item) => (
        <StatsItem key={item.id} {...item} />
      ))}
    </div>
  );
}

export default StatsContainer;
