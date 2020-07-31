import React, { Fragment } from "react";

export default () => {
  return (
    <Fragment>
      <main className="bg-red-600">
        <div className="container mx-auto h-screen flex">
          <div class="w-2/5 flex bg-gray-400">
            <div className="mb-auto mt-auto">
              <h1 className="text-6xl">Mi Café Verde</h1>
              <p className="text-base mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                amet optio ab fuga totam rerum obcaecati nobis velit, cumque
                consequuntur.
              </p>
              <button className="text-lg">Ver más</button>
            </div>
          </div>
          <div class="w-3/5 bg-gray-500"></div>
        </div>
      </main>
    </Fragment>
  );
};
