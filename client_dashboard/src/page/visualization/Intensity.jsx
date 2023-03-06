import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js/auto";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function LineChart() {
  const [searchFilter, setSearchFilter] = useState([]);
  useEffect(() => {
    loadInfo();
  }, []);

  const loadInfo = async () => {
    fetch("http://localhost:4000/api/information/all")
      .then((resp) => resp.json())
      .then((data) => setSearchFilter(data))
      .catch((error) => console.log({ error }));
    //  const result = await axios.get(`http://localhost:4000/api/information/all`)
  };

  function createArray() {
    const arr = [];
    for (let i = 0; i <= 1000; i++) {
      arr.push(i);
    }
    return arr;
  }

  const myArray = createArray();

  const intensityList = searchFilter.map((list) => list.intensity);

  intensityList.sort((a, b) => b - a);

  const intensityData = {
    labels: myArray.slice(0, 100),
    datasets: [
      {
        label: "Intensity of Top 100 Elements",
        data: intensityList.slice(0, 100),
        fill: false,
        borderColor: "rgb(198, 40, 40)",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
        },
      },
      y: {
        ticks: {
          min: 0,
          max: 100,
          stepHeight: 5,
          beginAtZero: true,
          font: {
            size: 15,
          },
        },
      },
    },
  };

  return (
    <div className=" p-3  " style={{ height: "700px", width: "auto" }}>
      <Line data={intensityData} options={options} />
    </div>
  );
}

export default LineChart;
