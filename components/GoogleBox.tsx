import * as React from "react";
import { ClickedWordContext } from "../utils/ClickedWordContext";

export const GoogleBox: React.FC = () => {
  const [googleText, setGoogleText] = React.useState("");
  const { clickedWord } = React.useContext(ClickedWordContext);

  React.useEffect(() => {
    if (clickedWord) {
      setGoogleText(clickedWord);
    } else {
      setGoogleText("");
    }
  }, [clickedWord]);

  return (
    <div className="border-t border-black flex flex-col w-full items-center justify-end flex-shrink-0">
      <textarea
        value={googleText}
        onChange={(e) => setGoogleText(e.target.value)}
        className="w-full border border-b-0 p-1 px-2 flex-grow"
      ></textarea>
      <a
        href={`https://translate.google.com/?sl=de&tl=en&text=${googleText}&op=translate`}
        target="_blank"
        className="bg-gray-300 hover:bg-gray-400 self-stretch text-center py-2"
      >
        Translate on Google
      </a>
    </div>
  );
};
