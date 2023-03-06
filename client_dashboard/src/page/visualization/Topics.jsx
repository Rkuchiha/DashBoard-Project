import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { Header } from "../../components";

function PieChart() {
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

  const topicsCounts = searchFilter.reduce((counts, { topic }) => {
    counts[topic] = (counts[topic] || 0) + 1;
    return counts;
  }, {});

  const labels = Object.keys(topicsCounts).slice(0, 10);
  const dataPoints = Object.values(topicsCounts).slice(0, 10);

  labels.sort((a, b) => topicsCounts[b] - topicsCounts[a]);
  dataPoints.sort((a, b) => b - a);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Countrys With Number of Elements",
        data: dataPoints,
        backgroundColor: [
          "rgb(255, 51, 51,0.7)",
          "rgb(153, 204, 51,0.7)",
          "rgb(153, 102, 51,0.7)",
          "rgb(153, 0, 51,0.7)",
          "rgb(255, 153, 51,0.7)",
          "rgb(255, 255, 51,0.7)",
          "rgb(51, 51, 153,0.7)",
        ],
        borderColor: [
          "rgb(255, 51, 51,1)",
          "rgb(153, 204, 51,1)",
          "rgb(153, 102, 51,1)",
          "rgb(153, 0, 51,1)",
          "rgb(255, 153, 51,1)",
          "rgb(255, 255, 51,1)",
          "rgb(51, 51, 153,1)",
        ],
        borderWidth: 1,
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
  };

  return (
    <div  className=" p-3" style={{ height: "800px" }} >
          <Header category="VISUALIZATION" title="Topics" />

      <Pie data={chartData} options={options} />
    </div>
  );
}

export default PieChart;
