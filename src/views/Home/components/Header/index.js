import React from "react";

export default () => {
  return (
    <div
      className="bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/sebashr20/image/upload/v1596239804/wygnhj3tilj42wdg6uxh.jpg)",
      }}
    >
      <div className="container mx-auto h-screen flex px-6 items-center">
        <div class="lg:w-2/4 xl:w-2/5 bg-gray-500">
          <h1 className="font-bold text-5xl md:text-6xl">Mi Café Verde</h1>
          <p className="text-base mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed amet
            optio ab fuga totam rerum obcaecati nobis velit, cumque
            consequuntur.
          </p>
          <button className="text-lg">Ver más</button>
        </div>
        {/* <div class="lg:w-3/5 bg-gray-400"></div> */}
      </div>
    </div>
  );
};
