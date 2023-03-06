import React, { useState, useEffect } from "react";
import {
  GridComponent,
  Inject,
  ColumnsDirective,
  ColumnDirective,
  Search,
  Page,
} from "@syncfusion/ej2-react-grids";
import { Start_End_YearGrid } from "../../data/dummy";
import { Header } from "../../components";
import { FilterEndYear } from "../../components";

const EndYearFilter = () => {
  const [filterInfo, setFilterInfo] = useState("");

  const [data, setData] = useState([]);
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

  function onFilterValueSelected(filterValue) {
    setFilterInfo(filterValue);
  }

  useEffect(() => {
    const results = searchFilter.filter((resp) => resp.end_year == filterInfo);
    setData(results);
  }, [filterInfo]);

  const toolbarOptions = ["Search"];

  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Filter" title="END YEAR" />
      <FilterEndYear filterValueSelected={onFilterValueSelected} />
      <GridComponent
        dataSource={data}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        editSettings={editing}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {Start_End_YearGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Search, Page]} />
      </GridComponent>
    </div>
  );
};
export default EndYearFilter;
