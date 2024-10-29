import { useContext, useState } from 'react';
import { GroupContext, OrderContext } from '../App';

export default function DropdownClick() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNestedDropdownOpen, setIsNestedDropdownOpen] = useState(false);
  const [isNestedDropdownOpen2, setIsNestedDropdownOpen2] = useState(false);
  const {grouping, setGrouping} = useContext(GroupContext);
  const {ordering, setOrdering} = useContext(OrderContext);

  const handleToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleNestedToggle = (setFunction) => {
    setFunction((prev) => !prev);
  };

  return (
    <div className="dropdown-container">
      <button
        id="dropdownClickButton"
        onClick={()=>{
          handleToggle();
          if(isNestedDropdownOpen)handleNestedToggle(setIsNestedDropdownOpen);
          if(isNestedDropdownOpen2)handleNestedToggle(setIsNestedDropdownOpen2);
        }}
        className="dropdown-button"
        type="button"
      >
        <div className="button-content">
          <img src={'/assets/Display.svg'} alt="display" className="icon-display" />
          Display
        </div>
        <img src={'/assets/down.svg'} alt="Down" className="icon-down" />
      </button>

      {isDropdownOpen && (
        <div id="dropdownClickMenu" className="dropdown-menu">
          <ul className="dropdown-list" aria-labelledby="dropdownClickButton">
            <li>
              <a href="#" className="dropdown-item">
                Grouping
                <div onClick={() =>{ 
                  handleNestedToggle(setIsNestedDropdownOpen)
                  if(isNestedDropdownOpen2)handleNestedToggle(setIsNestedDropdownOpen2);
                }} className='flex-sb selectStyle'>
                  <div>{grouping}</div>
                  <img src={'/assets/down.svg'} alt="Nested Down" className="icon-nested-down" />
                </div>
              </a>
              {isNestedDropdownOpen && (
                <div className="nested-dropdown-menu">
                  <ul className="nested-dropdown-list">
                    <li>
                      <a href="#" onClick={() => {
                        setGrouping("Status");
                        handleNestedToggle(setIsNestedDropdownOpen);
                      }} className="nested-dropdown-item">Status</a>
                    </li>
                    <li>
                      <a href="#" onClick={() => {
                        setGrouping("User");
                        handleNestedToggle(setIsNestedDropdownOpen);
                      }} className="nested-dropdown-item">User</a>
                    </li>
                    <li>
                      <a href="#" onClick={() => {
                        setGrouping("Priority");
                        handleNestedToggle(setIsNestedDropdownOpen);
                      }} className="nested-dropdown-item">Priority</a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <a href="#" className="dropdown-item">
                Ordering
                <div onClick={() => {
                  handleNestedToggle(setIsNestedDropdownOpen2)
                  if(isNestedDropdownOpen)handleNestedToggle(setIsNestedDropdownOpen);
                  }} className='flex-sb selectStyle'>
                  <div>{ordering}</div>
                  <img src={'/assets/down.svg'} alt="Nested Down" className="icon-nested-down" />
                </div>
              </a>
              {isNestedDropdownOpen2 && (
                <div className="nested-dropdown-menu">
                  <ul className="nested-dropdown-list">
                    <li>
                      <a href="#" onClick={() => {
                        setOrdering("Priority");
                        handleNestedToggle(setIsNestedDropdownOpen2);
                      }} className="nested-dropdown-item">Priority</a>
                    </li>
                    <li>
                      <a href="#" onClick={() => {
                        setOrdering("Title");
                        handleNestedToggle(setIsNestedDropdownOpen2);
                      }} className="nested-dropdown-item">Title</a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}