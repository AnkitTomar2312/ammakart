import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SearchVal = () => {
  const navigate = useNavigate();
  const { searchData } = useLocation();
  const [search, setSearch] = useState("");
  const handleformSubmission = (e) => {
    e.preventDefault();
    navigate({
      search: `search=${search}`,
    });
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleformSubmission}>
        <input
          name="search"
          type="text"
          id="search"
          placeholder="Enter product name, category"
          value={search}
          onChange={handleChange}
        />
        <button type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-search"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="10" cy="10" r="7" />
            <line x1="21" y1="21" x2="15" y2="15" />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default SearchVal;
