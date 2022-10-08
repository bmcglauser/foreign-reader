import * as React from "react";
import { ClickedWordContext } from "../utils/ClickedWordContext";

export const SearchBar: React.FC = () => {
  const [searchText, setSearchText] = React.useState<string>("");
  const { clickedWord, setClickedWord } = React.useContext(ClickedWordContext);
  React.useEffect(() => {
    setSearchText(clickedWord ?? "");
  }, [clickedWord]);

  const submitHandler = (
    e: React.FormEvent<HTMLFormElement | HTMLInputElement>
  ) => {
    e.preventDefault();
    setClickedWord(searchText);
  };

  return (
    <form className="mt-4 border-b border-black" onSubmit={submitHandler}>
      <input
        className="p-2 ml-6 bg-gray-200 focus:bg-white"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onSubmit={submitHandler}
        placeholder="enter German or English"
      />
    </form>
  );
};
