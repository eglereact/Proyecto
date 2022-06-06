import { ImStatsBars, ImProfile } from "react-icons/im";
import { MdManageSearch, MdLibraryAdd } from "react-icons/md";

const links = [
  { id: 1, text: "stats", path: "/", icon: <ImStatsBars /> },
  { id: 2, text: "All Items", path: "/all-items", icon: <MdManageSearch /> },
  { id: 3, text: "Add Items", path: "/add-items", icon: <MdLibraryAdd /> },
  { id: 4, text: "Profile", path: "/profile", icon: <ImProfile /> },
];

export default links;
