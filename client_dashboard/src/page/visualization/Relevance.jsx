import React, { useState, useEffect } from "react";
import { PolarArea } from "react-chartjs-2";
import { Header } from "../../components";

function PolarChart() {
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

  const relevanceCounts = searchFilter.reduce((counts, { relevance }) => {
    counts[relevance] = (counts[relevance] || 0) + 1;
    return counts;
  }, {});

  const labels = Object.keys(relevanceCounts).slice(0, 12);
  const dataPoints = Object.values(relevanceCounts).slice(0, 12);

  labels.sort((a, b) => relevanceCounts[b] - relevanceCounts[a]);
  dataPoints.sort((a, b) => b - a);

  const RelevanceData = {
    labels: labels,
    datasets: [
      {
        label: "Top 12 Country With Most Elements",
        data: dataPoints,
        backgroundColor: [
          "rgb(255, 99, 132,0.7)",
          "rgb(75, 192, 192,0.7)",
          "rgb(255, 205, 86,0.7)",
          "rgb(201, 203, 207,0.7)",
          "rgb(54, 162, 235,0.7)",
          "rgb(0, 150, 135,0.7)",
        ],
        borderColor: [
          "rgb(255, 99, 132,1)",
          "rgb(75, 192, 192,1)",
          "rgb(255, 205, 86,1)",
          "rgb(201, 203, 207,1)",
          "rgb(54, 162, 235,1)",
          "rgb(0, 150, 135,1)",
        ],
        borderWidth: 2,
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
    <div  className=" p-3" style={{ height: "1000px" }}>
      <Header category="VISUALIZATION" title="Relevance" />
      <PolarArea data={RelevanceData} options={options} />
    </div>
  );
}

export default PolarChart;
