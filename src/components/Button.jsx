import React from "react";

function Button({ text, width, height, bgColor, padding}) {
  // const buttonStyle = {
  //   width: width,
  //   height: height,
  //   backgroundColor: bgColor,
  //   paddingLeft: padding
  // }

  return (
    <div>
      <button className="bg-[#00df9b] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black">
        {text}
      </button>
    </div>
  );
}

export default Button;
