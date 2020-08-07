import React from "react";

export default () => {
  return (
    <div className="py-20 bg-red-600">
      <div className="container mx-auto h-full lg:flex px-6">
        <div class="lg:w-1/2 bg-gray-400">
          <h1 className="font-bold text-5xl md:text-6xl">Mi Café Verde</h1>
          <p className="text-base mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed amet
            optio ab fuga totam rerum obcaecati nobis velit, cumque
            consequuntur.
          </p>
          <button className="text-lg">Ver más</button>
        </div>
        <div class="lg:w-1/2 bg-gray-500">Hola</div>
      </div>
    </div>
  );
};
