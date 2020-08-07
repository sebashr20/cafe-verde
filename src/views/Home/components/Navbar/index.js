import React from "react";

export default () => {
  return (
    <div className="mx-auto h-auto w-full flex px-4 lg:px-16 pt-6 absolute">
      <div className="w-1/2 flex">
        <p className="mx-2">LOGO</p>
      </div>
      <div className="w-1/2 flex justify-end">
        <p className="mx-2">Products</p>
        <p className="mx-2">Contact</p>
        <p className="mx-2">Cart</p>
      </div>
    </div>
  );
};
