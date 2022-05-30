import React from "react";
import { HeartOutline, Heart } from "react-ionicons";

const Like = (props) => {
  if (props.liked !== true) {
    return <Heart color={"#7048e8"} height="40px" width="40px" />;
  }
  return <HeartOutline color={"#7048e8"} height="40px" width="40px" />;
};

export default Like;
