import * as React from "react";
import { TextButton } from "./TextButton";

type ForeignTextProps = {
  foreignText: string;
};

export const ForeignText: React.FC<ForeignTextProps> = ({ foreignText }) => {
  return (
    <div className="max-h-screen px-4 py-8 overflow-y-scroll border-r border-black">
      {foreignText.split("\n").map((line) =>
        line.length ? (
          <>
            <p>
              {line.split(" ").map((word, index) => (
                <TextButton key={`text/${index}`} foreignText={word} />
              ))}
            </p>
            <br />
          </>
        ) : (
          <></>
        )
      )}
    </div>
  );
};
