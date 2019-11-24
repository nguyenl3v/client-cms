import React from "react";
import Plyr from "react-plyr";
import { API } from "../config/defaultApi";

export default function ReactPlyr({image}) {
  return (
    <Plyr
      type="video"
      sources={[
        {
          src: `${API}/upload/slideshow/${image}`,
          type: "video/mp4",
          size: "1440",
          kind: "captions",
          label: "English",
          srclang: "en"
        }
      ]}
    ></Plyr>
  );
}
