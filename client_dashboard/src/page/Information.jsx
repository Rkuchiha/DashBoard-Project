import axios from 'axios';
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import {
  GridComponent,
  Inject,
  ColumnsDirective,
  ColumnDirective,
  Search,
  Page,
} from "@syncfusion/ej2-react-grids";

import { informationGrid } from "../data/dummy";

import { Header } from "../components";

const Employees = () => {
  const [info, setInfo] = useState({
    end_year: null,
    intensity: null,
    sector: "",
    topic: "",
    insight: "",
    url: "",
    region: "",
    start_year: null,
    impact: "",
    added: "",
    published: "",
    country: "",
    relevance: null,
    pestle: "",
    source: "",
    title: "",
    likelihood: null,
  });

    useEffect(() => {
        loadInfo()
    }, [])

    const loadInfo = async () => {
        const result = await axios.get(`http://localhost:4000/api/information/all`)
        setInfo(result.data)

    }

  const toolbarOptions = ["Search"];

  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="DATA" title="Information" />
      <GridComponent
        dataSource={info}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        editSettings={editing}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective >
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {informationGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Search, Page]} />
      </GridComponent>
    </div>
  );
};
export default Employees;
