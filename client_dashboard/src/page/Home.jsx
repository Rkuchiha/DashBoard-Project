import React from "react";
import { Header } from "../components";
import BarChart from "./visualization/Country";
import LineChart from "./visualization/Intensity";
import DoughnutChart from "./visualization/Region";
import BarChart02 from "./visualization/Likelihood";
import PolarChart from "./visualization/Relevance";
import PieChart from "./visualization/Topics";
import LineChart02 from "./visualization/Year";
const Home = () => {
  return (
    <div className=" p-4">
      <Header category="HOME" title="VISUALIZATION" />

      <div className="grid grid-cols-2 gap-2 p-5 ">
        <div className="block max-w-xl2 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <BarChart />
        </div>

        <div className="block max-w-xl2 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <Header category="VISUALIZATION" title="Intensity" />
          <LineChart />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 p-5">
        <div className="block max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <PieChart />
        </div>

        <div className="block max-w-xl h-40.5 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <PolarChart />
        </div>

        <div className="block max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <DoughnutChart />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-1 p-5 pl-3">
        <div className="block max-w-xl2 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <Header category="VISUALIZATION" title="Likelihood" />
          <BarChart02 />
        </div>

        <div className="block max-w-xl2 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <Header category="VISUALIZATION" title="End and Start Chart" />
          <LineChart02 />
        </div>
      </div>
    </div>
  );
};

export default Home;
