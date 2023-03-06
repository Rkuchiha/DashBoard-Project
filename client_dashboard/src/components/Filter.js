import React from 'react';
import { CountryList, SourceList } from './SourceFilterList';


export const FilterCountry = (props) => {

    function onFilterValueChanged(event) {

        props.filterValueSelected(event.target.value)
    }

    return (
        <div className="w-full bg-white border-1 p-2 m-1 text-center">
            <select name="isCountry" onChange={onFilterValueChanged}>
                <option value="" >Select Country</option>
                {CountryList.map((list,index)=>(
                <option key={list.country} value={list.value} >{list.country}</option>
                ))
                }
            </select>
        </div>
    );
}

export const FilterEndYear = (props) => {

    function onFilterValueChanged(event) {

        props.filterValueSelected(event.target.value)
    }

    return (
        <div className="w-full bg-white border-1 p-2 m-1 text-center">
            <select name="isCountry" onChange={onFilterValueChanged}>
                <option value="" >Select End Year</option>
                <option value="o" >0</option>
                <option value="2016" >2016</option>
                <option value="2017" >2017</option>
                <option value="2018" >2018</option>
                <option value="2019" >2019</option>
                <option value="2020" >2020</option>
                <option value="2021" >2021</option>
                <option value="2022" >2022</option>
                <option value="2024" >2024</option>
                <option value="2025" >2025</option>
                <option value="2026" >2026</option>
                <option value="2027" >2027</option>
                <option value="2028" >2028</option>
                <option value="2030" >2030</option>
                <option value="2034" >2034</option>
                <option value="2035" >2035</option>
                <option value="2036" >2036</option>
                <option value="2040" >2040</option>
                <option value="2041" >2041</option>
                <option value="2046" >2046</option>
                <option value="2050" >2050</option>
                <option value="2051" >2051</option>
                <option value="2055" >2055</option>
                <option value="2060" >2060</option>
                <option value="2126" >2126</option>
                <option value="2200" >2200</option>
            </select>
        </div>
    );
}

export const FilterStartYear = (props) => {

    function onFilterValueChanged(event) {

        props.filterValueSelected(event.target.value)
    }

    return (
        <div className="w-full bg-white border-1 p-2 m-1 text-center">
            <select name="isCountry" onChange={onFilterValueChanged}>
                <option value="" >Select Start Year</option>
                <option value="2016" >2016</option>
                <option value="2017" >2017</option>
                <option value="2018" >2018</option>
                <option value="2019" >2019</option>
                <option value="2020" >2020</option>
                <option value="2021" >2021</option>
                <option value="2022" >2022</option>
                <option value="2025" >2025</option>
                <option value="2028" >2028</option>
                <option value="2030" >2030</option>
                <option value="2035" >2035</option>
                <option value="2040" >2040</option>
                <option value="2050" >2050</option>
            </select>
        </div>
    );
}

export const FilterPEST = (props) => {

    function onFilterValueChanged(event) {

        props.filterValueSelected(event.target.value)
    }

    return (
        <div className="w-full bg-white border-1 p-2 m-1 text-center">
            <select name="isCountry" onChange={onFilterValueChanged}
            >
                <option value="" >Select Pestle</option>
                <option value="economic" >Economic</option>
                <option value="environmental" >Environmental</option>
                <option value="healthcare" >Healthcare</option>
                <option value="industries" >Industries</option>
                <option value="lifestyles" >Lifestyles</option>
                <option value="organization" >Organization</option>
                <option value="political" >Political</option>
                <option value="social" >Social</option>
                <option value="technological" >Technological</option>
            </select>
        </div>
    );
}

export const FilterRegion = (props) => {

    function onFilterValueChanged(event) {

        props.filterValueSelected(event.target.value)
    }

    return (
        <div className="w-full bg-white border-1 p-2 m-1 text-center">
            <select name="isCountry" onChange={onFilterValueChanged}
            >
                <option value="" >Select Region</option>
                <option value="africa" >Africa</option>
                <option value="asia" >Asia</option>
                <option value="central africa" >Central Africa</option>
                <option value="central america" >Central America</option>
                <option value="central asia" >Central Asia</option>
                <option value="eastern africa" >Eastern Africa</option>
                <option value="eastern asia" >Eastern Asia</option>
                <option value="eastern europe" >Eastern Europe</option>
                <option value="europe" >Europe</option>
                <option value="northern africa" >Northern Africa</option>
                <option value="northern america" >Northern America</option>
                <option value="northern europe" >Northern Europe</option>
                <option value="oceania" >Oceania</option>
                <option value="south america" >South America</option>
                <option value="south-eastern asia" >South-Eastern Asia</option>
                <option value="southern africa" >Southern Africa</option>
                <option value="southern asia" >Southern Asia</option>
                <option value="southern europe" >Southern Europe</option>
                <option value="western africa" >Western Africa</option>
                <option value="western asia" >Western Asia</option>
                <option value="western europe" >Western Europe</option>
                <option value="world" >World</option>
            </select>
        </div>
    );
}

export const FilterSector = (props) => {

    function onFilterValueChanged(event) {

        props.filterValueSelected(event.target.value)
    }

    return (
        <div className="w-full bg-white border-1 p-2 m-1 text-center">
            <select name="isCountry" onChange={onFilterValueChanged}
            >
                <option value="" >Select Sector</option>
                <option value="aerospace & defence" >Aerospace & defence</option>
                <option value="automotive" >Automotive</option>
                <option value="construction" >Construction</option>
                <option value="energy" >Energy</option>
                <option value="environment" >Environment</option>
                <option value="financial services" >Financial services</option>
                <option value="food & agriculture" >Food & agriculture</option>
                <option value="government" >Government</option>
                <option value="healthcare" >Healthcare</option>
                <option value="information technology" >Information Technology</option>
                <option value="manufacturing" >Manufacturing</option>
                <option value="media & entertainment" >Media & entertainment</option>
                <option value="retail" >Retail</option>
                <option value="security" >Security</option>
                <option value="support services" >Support services</option>
                <option value="tourism & hospitality" >Tourism & hospitality</option>
                <option value="transport" >Transport</option>
                <option value="water" >Water</option>
            </select>
        </div>
    );
}

export const FilterSource = (props) => {

    function onFilterValueChanged(event) {

        props.filterValueSelected(event.target.value)
    }

    return (
        <div className="w-full bg-white border-1 p-2 m-1 text-center">
            <select name="isCountry" onChange={onFilterValueChanged}>
                <option value="" >Select Source</option>
                {SourceList.map((list,index)=>(
                <option key={list.name} value={list.name} >{list.name}</option>
                ))
                }
            </select>
        </div>
    );
}

export const FilterSWOT = (props) => {

    function onFilterValueChanged(event) {

        props.filterValueSelected(event.target.value)
    }

    return (
        <div className="w-full bg-white border-1 p-2 m-1 text-center">
            <select name="isCountry" onChange={onFilterValueChanged}
            >
                <option value="" >Select SWOT</option>
                <option value="algeria" >Algeria</option>
                <option value="angola" >Angola</option>
                <option value="argentina" >Argentina</option>
            </select>
        </div>
    );
}

export const FilterTopics = (props) => {

    function onFilterValueChanged(event) {

        props.filterValueSelected(event.target.value)
    }

    return (
        <div className="w-full bg-white border-1 p-2 m-1 text-center">
            <select name="isCountry" onChange={onFilterValueChanged}
            >
                <option value="" >Select Topics</option>
                <option value="3d" >3D</option>
                <option value="administration" >administration</option>
                <option value="agriculture" >agriculture</option>
                <option value="aquaculture" >aquaculture</option>
                <option value="artificial intelligence" >artificial intelligence</option>
                <option value="asylum" >asylum</option>
                <option value="automaker" >automaker</option>
                <option value="bank" >bank</option>
                <option value="battery" >battery</option>
                <option value="biofuel" >biofuel</option>
                <option value="brexit" >brexit</option>
                <option value="building" >building</option>
                <option value="business" >business</option>
                <option value="capital" >capital</option>
                <option value="car" >car</option>
                <option value="carbon" >carbon</option>
                <option value="change" >change</option>
                <option value="city" >city</option>
                <option value="climate" >climate</option>
                <option value="climate change" >climate change</option>
                <option value="clothing" >clothing</option>
                <option value="coal" >coal</option>
                <option value="communication" >communication</option>
                <option value="consumer" >consumer</option>
                <option value="consumption" >consumption</option>
                <option value="crisis" >crisis</option>
                <option value="data" >data</option>
                <option value="debt" >debt</option>
                <option value="demand" >demand</option>
                <option value="economic" >economic</option>
                <option value="economic growth" >economic growth</option>
                <option value="economy" >economy</option>
                <option value="election" >election</option>
                <option value="electricity" >electricity</option>
                <option value="emission" >emission</option>
                <option value="energy" >energy</option>
                <option value="export" >export</option>
                <option value="factory" >factory</option>
                <option value="farm" >farm</option>
                <option value="finance" >finance</option>
                <option value="food" >food</option>
                <option value="fossil fuel" >fossil fuel</option>
                <option value="fracking" >fracking</option>
                <option value="gamification" >gamification</option>
                <option value="gas" >gas</option>
                <option value="gasoline" >gasoline</option>
                <option value="gdp" >gdp</option>
                <option value="government" >government</option>
                <option value="greenhouse gas" >greenhouse gas</option>
                <option value="growth" >growth</option>
                <option value="ice" >ice</option>
                <option value="industry" >industry</option>
                <option value="inflation" >inflation</option>
                <option value="information" >information</option>
                <option value="infrastructure" >infrastructure</option>
                <option value="interest rate" >interest rate</option>
                <option value="investment" >investment</option>
                <option value="market" >market</option>
                <option value="material" >material</option>
                <option value="money" >money</option>
                <option value="nuclear" >nuclear</option>
                <option value="oil" >oil</option>
                <option value="peak oil" >peak oil</option>
                <option value="plastic" >plastic</option>
                <option value="policy" >policy</option>
                <option value="politics" >politics</option>
                <option value="pollution" >pollution</option>
                <option value="population" >population</option>
                <option value="power" >power</option>
                <option value="production" >production</option>
                <option value="resource" >resource</option>
                <option value="revenue" >revenue</option>
                <option value="risk" >risk</option>
                <option value="robot" >robot</option>
                <option value="security" >security</option>
                <option value="shale gas" >shale gas</option>
                <option value="shortage" >shortage</option>
                <option value="software" >software</option>
                <option value="storm" >storm</option>
                <option value="strategy" >strategy</option>
                <option value="tax" >tax</option>
                <option value="technology" >technology</option>
                <option value="tension" >tension</option>
                <option value="terrorism" >terrorism</option>
                <option value="tourist" >tourist</option>
                <option value="trade" >trade</option>
                <option value="transport" >transport</option>
                <option value="transportation" >transportation</option>
                <option value="unemployment" >unemployment</option>
                <option value="vehicle" >vehicle</option>
                <option value="war" >war</option>
                <option value="Washington" >Washington</option>
                <option value="water" >water</option>
                <option value="wealth" >wealth</option>
                <option value="work" >work</option>
                <option value="worker" >worker</option>
                <option value="workforce" >workforce</option>
            </select>
        </div>
    );
}



















