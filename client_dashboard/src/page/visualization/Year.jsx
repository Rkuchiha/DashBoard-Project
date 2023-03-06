import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

function LineChart02() {
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

  const end_yearCounts = searchFilter.reduce((counts, { end_year }) => {
    counts[end_year] = (counts[end_year] || 0) + 1;
    return counts;
  }, {});

  const start_yearcountryCounts = searchFilter.reduce(
    (counts, { start_year }) => {
      counts[start_year] = (counts[start_year] || 0) + 1;
      return counts;
    },
    {}
  );

  const labels = Object.keys(end_yearCounts).slice(0, 24);
  const dataPoints = Object.values(end_yearCounts).slice(0, 24);
  const dataPoints02 = Object.values(start_yearcountryCounts).slice(0, 13);

  const intensityData = {
    labels: labels,
    datasets: [
      {
        type: "line",
        label: "End Year",
        data: dataPoints,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
      },
      {
        type: "line",
        label: "Start Year",
        data: dataPoints02,
        fill: false,
        borderColor: "rgb(54, 162, 235)",
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {},
    layout: {
      padding: {
        left: 50,
        right: 50,
        top: 0,
        bottom: 0,
      },
    },
  };

  return (
    <div style={{ height: "700px", width: "auto" }}>
      <Line data={intensityData} options={options} />
    </div>
  );
}

export default LineChart02;
