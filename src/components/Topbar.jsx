import { useContext } from "react";
import DropdownHover from "./DropdownClick";
import { GroupContext, OrderContext } from "../App";

export default function Topbar() {
  const grouping = useContext(GroupContext);
  const ordering = useContext(OrderContext);
    return (
      <>
        <div className="topbar">
            <button><DropdownHover/></button>
        </div>
      </>
    )
  }