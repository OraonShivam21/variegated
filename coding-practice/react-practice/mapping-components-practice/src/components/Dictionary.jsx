import React from "react";
import emojipedia from "../emojipedia";
import Term from "./Term";

const Dictionary = () => {
  return (
    <>
      <dl className="dictionary">
        {emojipedia.map((emojiItem) => {
          return (
            <Term
              key={emojiItem.id}
              emoji={emojiItem.emoji}
              name={emojiItem.name}
              meaning={emojiItem.meaning}
            />
          );
        })}
      </dl>
    </>
  );
};

export default Dictionary;
