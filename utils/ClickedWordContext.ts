import * as React from "react";

type IClickedWordContext = {
  clickedWord: string | null;
  setClickedWord: React.Dispatch<React.SetStateAction<string | null>>;
};

export const ClickedWordContext = React.createContext<IClickedWordContext>({
  clickedWord: null,
  setClickedWord: () => {},
});
