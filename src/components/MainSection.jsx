import React from "react";
import Box1 from "./Boxes/Box1";
import Box2 from "./Boxes/Box2";
const filterIcon = "/images/filter.jpg";

const MainSection = () => {
  return (
    <>
      <div className="mobile-heading">
        <div className=" flexb">
          <div>
            <h1 className="main-heading">Practice Interview Question</h1>
            <h2 className="sub-heading">
              Embark on an explanation: 800 questions Await!
            </h2>
          </div>
          <button className="filter-button">
            <img src={filterIcon} alt="filter icon" className="filter-icon" />
            <div>Filters</div>
          </button>
        </div>
        <div className="button-group">
          <select name="button" className="button-1 sele" value="Button 1">
            {" "}
            <option value="temp">Popular</option>
          </select>
          <select name="button" className="button-2 sele" value="Button 2">
            {" "}
            <option value="temp">Complexity</option>
          </select>
          <select name="button" className="button-3 sele" value="Button 3">
            {" "}
            <option value="temp">Industry Type</option>
          </select>
          <select name="button" className="button-4 sele" value="Button 4">
            {" "}
            <option value="temp">Industry</option>
          </select>
          <select name="button" className="button-4 sele" value="Button 4">
            {" "}
            <option value="temp">Company Type</option>
          </select>
        </div>
      </div>
      <hr className="line" />
      <div className="backbutton">
        <button>&larr; Back to Questions </button>
      </div>

      <div className="boxes flex-col">
        <Box1 />

        <div className="flex-row answers">
          <div className="ml-[0.5rem] flex items-center">
            <h4>Answers(23)</h4>
          </div>
          <div className="mr-[0.5rem] outline-none outline-0">
            Sort By :
            <select name="dropdown" id="" className="dropdown-new">
              <option value="popular">Popular</option>
            </select>
          </div>
        </div>
        <Box2 />
      </div>
    </>
  );
};

export default MainSection;
