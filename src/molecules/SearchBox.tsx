import React, { useContext } from "react";
import { StateContext } from "../store/StateContext";
import useLocalStorage from "../helpers/useLocalStorage";

type SearchBoxProps = {};

const SearchBox: React.FC<SearchBoxProps> = () => {
  const [search, setSearch] = useLocalStorage("name", ""); //custom hook
  const { context, setContext } = useContext(StateContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContext({
      searchedInput: e.target.value,
    });
    console.log(context);
    setSearch(e.target.value);
  };
  return (
    <div className="header-input-div">
      <input
        value={search}
        className="header-search-bar"
        placeholder="search keywords"
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default SearchBox;
