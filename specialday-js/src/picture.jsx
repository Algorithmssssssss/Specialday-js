import React from "react";
import { WindupChildren } from "windups";
const Picture = () => {
  return (
    <WindupChildren>
      <div>
        {"My dear auntie"}
      </div>
      <img src={"auntie.jpg"}/>
      <div>
        {"The world's kindest frog"}
      </div>
    </WindupChildren>
  );
};

export default Picture;