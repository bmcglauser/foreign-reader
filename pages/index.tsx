import * as React from "react";
import axios from "axios";
import type { NextPage } from "next";
import fullText from "../assets/arabicText.json";
import { ForeignText } from "../components/ForeignText";
import { ClickedWordContext } from "../utils/ClickedWordContext";
import { SearchBar } from "../components/SearchBar";
import { TranslationList } from "../components/TranslationList";
import { GoogleBox } from "../components/GoogleBox";
//
//  Future work:
//    - in memory cache
//    - single words / phrases in cache highlighted in yellow
//    - phrases appear in tooltip on hover
//

const Home: NextPage = () => {
  const [clickedWord, setClickedWord] = React.useState<string | null>(null);
  const [translation, setTranslation] = React.useState<string>("");
  const [cache, setCache] = React.useState<Record<string, string>>({});

  React.useEffect(() => {
    if (clickedWord && cache[clickedWord.toLowerCase()])
      setTranslation(cache[clickedWord.toLowerCase()]);
    else if (clickedWord) {
      axios(`/api/translate/${clickedWord}`).then((res) => {
        setTranslation(res.data[0]?.text ?? "error");
        res.data[0]?.text?.length &&
          setCache((c) => ({
            ...c,
            [clickedWord.toLowerCase()]: res.data.text,
          }));
      });
    } else {
      setTranslation("");
    }
  }, [clickedWord]);

  return (
    <ClickedWordContext.Provider value={{ clickedWord, setClickedWord }}>
      <div className="w-screen flex">
        <ForeignText foreignText={fullText} />
        <div className="w-2/5 max-h-screen h-screen flex-shrink-0 grid grid-cols-1 grid-rows-[1fr_4fr_2fr]">
          <SearchBar />
          {/* <TranslationList translations={translations} /> */}
          <p className="w-full text-center text-2xl pt-6">{translation}</p>
          <GoogleBox />
        </div>
      </div>
    </ClickedWordContext.Provider>
  );
};

export default Home;
