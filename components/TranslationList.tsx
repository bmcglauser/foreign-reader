import * as React from "react";
import { ClickedWordContext } from "../utils/ClickedWordContext";

type TranslationListProps = {
  translations: string;
};

export const TranslationList: React.FC<TranslationListProps> = ({
  translations,
}) => {
  const { clickedWord } = React.useContext(ClickedWordContext);
  // const getTranslationsDict = (ts: ITranslation[]) => {
  //   const dict = ts
  //     .map((t) => t[1])
  //     .reduce(
  //       (acc, entry) => {
  //         const { mostRecentParens } = acc;
  //         const isParens = /\(.+\)/.test(entry);
  //         if (isParens) {
  //           return {
  //             ...acc,
  //             mostRecentParens: entry,
  //           };
  //         }
  //         return {
  //           ...acc,
  //           [mostRecentParens]: [...(acc[mostRecentParens] ?? []), entry],
  //         };
  //       },
  //       { mostRecentParens: "" } as any
  //     );
  //   delete dict.mostRecentParens;
  //   return dict as Record<string, string[]>;
  // };
  // // acc: { mostRecentParensKey: string, [parensKeys]: string[] }
  // //
  // const dict = getTranslationsDict(translations);
  const makeListItem = (s: string) => (
    <li className="" key={s}>
      {s}
    </li>
  );
  const makeRowFromEntry = (word: string) => (
    <tr>
      <td className="border px-2 py-2"></td>
      <td className="border px-2 py-2">
        <ul className="list-disc list-inside">{makeListItem(word)}</ul>
      </td>
    </tr>
  );
  const translationTable: JSX.Element = (
    <table className="w-full">
      <thead>
        <th>Context</th>
        <th>English</th>
      </thead>
      <tbody>{makeRowFromEntry(translations)}</tbody>
    </table>
  );

  return (
    <div className="overflow-y-scroll mr-2">
      {translations.length ? (
        translationTable
      ) : clickedWord?.length ? (
        <p className="m-4">None found</p>
      ) : (
        <></>
      )}
    </div>
  );
};
