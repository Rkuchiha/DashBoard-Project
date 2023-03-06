import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { IoMdOptions } from 'react-icons/io';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Home,Information, Country, Intensity, Likelihood, Region, Topics, Year, Relevance } from './page'
import { CountryFilter, EndYearFilter, TopicsFilter, SectorFilter, RegionFilter, PESTFilter, SourceFilter, SWOTFilter,StartYearFilter }  from './page'
import './App.css';


import { useStateContext } from './contexts/ContextProvider';



function App() {

  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);


  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 top-4" style={{ zIndex: '1000' }}>

            <button
              type="button"
              onClick={() => setThemeSettings(true)}
              style={{ background: currentColor, borderRadius: '40%' }}
              className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
            >
              <IoMdOptions />
            </button>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
              {themeSettings && (<ThemeSettings />)}

              <Routes>
                {/* dashboard  */}
                <Route path="/" element={(<Home />)} />
                <Route path="/information" element={(<Information />)} />



                {/* pages  */}
                {/* <Route path="/employees" element={<Employees />} /> */}

                {/* Visulization  */}
                <Route path="/country" element={<Country />} />
                <Route path="/intensity" element={<Intensity />} />
                <Route path="/likelihood" element={<Likelihood />} />
                <Route path="/region" element={<Region />} />
                <Route path="/relevance" element={<Relevance />} />
                <Route path="/topics" element={<Topics />} />
                <Route path="/year" element={<Year />} />

                {/* Filter */}
                <Route path="/startyearfilter" element={<StartYearFilter />} />
                <Route path="/countryfilter" element={<CountryFilter />} />
                <Route path="/endyearfilter" element={<EndYearFilter />} />
                <Route path="/topicsfilter" element={<TopicsFilter />} />
                <Route path="/sectorfilter" element={<SectorFilter />} />
                <Route path="/regionfilter" element={<RegionFilter />} />
                <Route path="/pestfilter" element={<PESTFilter />} />
                <Route path="/sourcefilter" element={<SourceFilter />} />
                <Route path="/swotfilter" element={<SWOTFilter />} />


              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;