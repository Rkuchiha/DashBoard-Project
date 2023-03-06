import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Header } from "../../components";

function DoughnutChart() {
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

  const regionCounts = searchFilter.reduce((counts, { region }) => {
    counts[region] = (counts[region] || 0) + 1;
    return counts;
  }, {});

  const labels = Object.keys(regionCounts).slice(0, 12);
  const dataPoints = Object.values(regionCounts).slice(0, 12);

  labels.sort((a, b) => regionCounts[b] - regionCounts[a]);
  dataPoints.sort((a, b) => b - a);

  const regionData = {
    labels: labels,
    datasets: [
      {
        label: "Regions With Most Elements",
        data: dataPoints,
        backgroundColor: [
          "rgba(233,30,99, 0.6)",
          "rgba(156,39,176, 0.6)",
          "rgba(103, 58, 183, 0.6)",
          "rgba(3, 169, 244, 0.6)",
          "rgba(0, 150, 136, 0.6)",
          "rgba(0, 159, 51, 0.6)",
          "rgba(102, 255, 51, 0.6)",
          "rgba(255, 112, 67, 0.6)",
          "rgba(46, 64, 83, 0.6)",
          "rgba(186, 74, 0, 0.6)",
          "rgba(212, 172, 13, 0.6)",
          "rgba(255, 159, 64, 0.6)",
        ],
        borderColor: [
          "rgba(233,30,99, 1)",
          "rgba(156,39,176, 1)",
          "rgba(103, 58, 183, 1)",
          "rgba(3, 169, 244, 1)",
          "rgba(0, 150, 136, 1)",
          "rgba(0, 159, 51, 1)",
          "rgba(102, 255, 51, 1)",
          "rgba(255, 112, 67, 1)",
          "rgba(46, 64, 83, 1)",
          "rgba(186, 74, 0, 1)",
          "rgba(212, 172, 13, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    indexAxis: "y",
    layout: {
      padding: {
        left: 50,
        right: 50,
        top: 0,
        bottom: 0,
      },
    },
    scales: {},
  };

  return (
    <div  className=" p-3" style={{ height: "700px" }}>
      <Header category="VISUALIZATION" title="Region" />
      <Doughnut data={regionData} options={options} />
    </div>
  );
}

export default DoughnutChart;
