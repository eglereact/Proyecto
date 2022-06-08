import { ImStatsBars, ImProfile } from "react-icons/im";
import { MdManageSearch, MdLibraryAdd } from "react-icons/md";

const links = [
  { id: 1, text: "stats", path: "/", icon: <ImStatsBars /> },
  { id: 2, text: "All Jobs", path: "/all-jobs", icon: <MdManageSearch /> },
  { id: 3, text: "Add Job", path: "/add-job", icon: <MdLibraryAdd /> },
  { id: 4, text: "Profile", path: "/profile", icon: <ImProfile /> },
];

export default links;
