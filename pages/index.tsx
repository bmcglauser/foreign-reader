import * as React from "react";
import axios from "axios";
import type { NextPage } from "next";
import fullText from "../assets/fullText.json";
import { ForeignText } from "../components/ForeignText";
import { ClickedWordContext } from "../utils/ClickedWordContext";
import { SearchBar } from "../components/SearchBar";
import { TranslationList } from "../components/TranslationList";
import { GoogleBox } from "../components/GoogleBox";

const Home: NextPage = () => {
  const [clickedWord, setClickedWord] = React.useState<string | null>(null);
  const [translations, setTranslations] = React.useState<ITranslation[]>([]);

  React.useEffect(() => {
    if (clickedWord) {
      axios(`/api/translate/${clickedWord}`).then((res) => {
        setTranslations(res.data);
      });
    } else {
      setTranslations([]);
    }
  }, [clickedWord]);

  return (
    <ClickedWordContext.Provider value={{ clickedWord, setClickedWord }}>
      <div className="w-screen flex">
        <ForeignText foreignText={fullText} />
        <div className="w-2/5 max-h-screen h-screen flex-shrink-0 grid grid-cols-1 grid-rows-[1fr_4fr_2fr]">
          <SearchBar />
          <TranslationList translations={translations} />
          <GoogleBox />
        </div>
      </div>
    </ClickedWordContext.Provider>
  );
};

export default Home;
