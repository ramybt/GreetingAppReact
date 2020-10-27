import React from "react";

function Heading() {
  const date = new Date(); // 11:18:48 AM
  const currentTime = date.getHours();
  const currentMinutes = date.getMinutes();
  console.log(currentTime);
  console.log(currentMinutes);
  console.log;

  const costumStyle = {
    color: ""
  };

  let gretting;

  if (currentTime < 12) {
    gretting = "Good Morning";
    costumStyle.color = "red";
  } else if (currentTime < 18) {
    gretting = "Good Afternoon";
    costumStyle.color = "green";
  } else {
    gretting = "Good Evenning";
    costumStyle.color = "blue";
  }

  return (
    <h1 className="heading" style={costumStyle}>
      {gretting}
    </h1>
  );
}

export default Heading;
