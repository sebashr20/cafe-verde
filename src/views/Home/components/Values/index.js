import React, { Fragment } from "react";

const cards = [1, 2, 3];

export default () => {
  return (
    <Fragment>
      <main className="my-10">
        <h1 className="font-bold text-6xl text-center">Beneficios</h1>

        <div className="container mx-auto h-full lg:flex px-6 xl:px-12 lg:justify-between">
          {cards.map((card) => (
            <div
              className="w-ful lg:max-w-xs xl:max-w-sm rounded border mb-4 lg:mb-0"
              key={card}
            >
              {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
              <div className="px-6 py-4">
                <h2 className="font-bold text-xl mb-2">The Coldest Sunset</h2>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </Fragment>
  );
};
