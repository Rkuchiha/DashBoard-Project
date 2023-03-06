import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

function BarChart02() {
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

  const LikelihoodCounts = searchFilter.reduce((counts, { likelihood }) => {
    counts[likelihood] = (counts[likelihood] || 0) + 1;
    return counts;
  }, {});

  const labels = Object.keys(LikelihoodCounts);
  const dataPoints = Object.values(LikelihoodCounts);

  const LikelihoodData = {
    labels: labels,
    datasets: [
      {
        label: "Intensity",
        data: dataPoints,
        fill: false,
        backgroundColor: "rgba(255, 235, 59,0.6)",
        borderColor: "rgb(251, 192, 45)",
        borderWidth: 2,
        barThickness: 110,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 50,
        right: 50,
        top: 0,
        bottom: 0,
      },
    },
    scales: {
      x: {
        ticks: {
          min: 0,
          max: 1000,
        },
      },
    },
  };

  return (
    <div style={{ height: "700px", width: "auto" }}>
      <Bar data={LikelihoodData} options={options} />
    </div>
  );
}

export default BarChart02;
