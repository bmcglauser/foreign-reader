import * as React from "react";
import { ClickedWordContext } from "../utils/ClickedWordContext";

type TextButtonProps = {
  foreignText: string;
};

export const TextButton: React.FC<TextButtonProps> = ({ foreignText }) => {
  const { clickedWord, setClickedWord } = React.useContext(ClickedWordContext);
  const isSelected = clickedWord?.toLowerCase() === foreignText.toLowerCase();
  return (
    <>
      <span
        className={
          isSelected ? "bg-green-300 hover:outline" : "hover:bg-gray-300"
        }
        onClick={() =>
          isSelected ? setClickedWord(null) : setClickedWord(foreignText)
        }
        onBlur={() => setClickedWord(null)}
      >
        {foreignText}
      </span>{" "}
    </>
  );
};
