import React from 'react';
import { AiOutlineLineChart, AiOutlineBarChart, AiOutlineHome, AiOutlineFileText } from 'react-icons/ai';
import { FiShoppingBag, FiPieChart } from 'react-icons/fi';
import { BsBarChart, BsInfoCircle, BsIntersect } from 'react-icons/bs';
import { RiStockLine } from 'react-icons/ri';
import { GiModernCity, GiCalendarHalfYear, } from 'react-icons/gi';
import { TbChartDonut } from 'react-icons/tb'
import { MdStackedLineChart } from 'react-icons/md'
import { FaMortarPestle, FaCity } from 'react-icons/fa'
import { MdOutlineSource } from 'react-icons/md'

export const themeColors = [
    {
        name: 'blue-theme',
        color: '#1A97F5',
    },
    {
        name: 'green-theme',
        color: '#03C9D7',
    },
    {
        name: 'purple-theme',
        color: '#7352FF',
    },
    {
        name: 'red-theme',
        color: '#FF5C8E',
    },
    {
        name: 'indigo-theme',
        color: '#1E4DB7',
    },
    {
        color: '#FB9678',
        name: 'orange-theme',
    },
];


export const links = [
    {
        title: 'Dashboard',
        links: [
            {
                name: 'Home',
                set: '',
                icon: <AiOutlineHome />,
            },
            {
                name: 'Information',
                set: 'information',
                icon: <BsInfoCircle />,
            }
        ],
    },
    {
        title: 'Visualization',
        links: [
            {
                name: 'Country',
                set: 'Country',
                icon: <BsBarChart />,
            },

            {
                name: 'Intensity',
                set: 'Intensity',
                icon: <AiOutlineLineChart />,
            },
            {
                name: 'Likelihood',
                set: 'Likelihood',
                icon: <AiOutlineBarChart />,
            },
            {
                name: 'Region',
                set: 'Region',
                icon: <TbChartDonut />,
            },
            {
                name: 'Relevance',
                set: 'Relevance',
                icon: <RiStockLine />,
            },
            {
                name: 'Topics',
                set: 'Topics',
                icon: <FiPieChart />,
            },
            {
                name: 'Year',
                set: 'Year',
                icon: <MdStackedLineChart />,
            },
        ],
    },
    {
        title: 'Filter',
        links: [
            {
                name: 'Country',
                set: 'countryfilter',
                icon: <GiModernCity />,
            },
            {
                name: 'Start Year',
                set: 'startyearfilter',
                icon: <GiCalendarHalfYear />,
            },
            {
                name: 'End Year',
                set: 'endyearfilter',
                icon: <GiCalendarHalfYear />,
            },
            {
                name: 'Pestle',
                set: 'pestfilter',
                icon: <FaMortarPestle />,
            },
            {
                name: 'Region',
                set: 'regionfilter',
                icon: <FaCity />,
            },
            {
                name: 'Sector',
                set: 'sectorfilter',
                icon: <BsIntersect />,
            },
            {
                name: 'Source',
                set: 'sourcefilter',
                icon: <MdOutlineSource />,
            },
            {
                name: 'SWOT',
                set: 'swotfilter',
                icon: <FiShoppingBag />,
            },
            {
                name: 'Topics',
                set: 'topicsfilter',
                icon: <AiOutlineFileText />,
            },
        ],
    },
];


export const informationGrid = [
    {
        field: 'title',
        headerText: 'Title',
        width: '150',
        height: '50',
        textAlign: 'right',
    },
    {
        field: 'added',
        headerText: 'Added',
        width: '130',
        textAlign: 'center',
    },
    {
        field: 'insight',
        headerText: 'Insight',
        width: '180',
        textAlign: 'Center',
    },
    {
        field: 'url',
        headerText: 'URL Link',
        width: '180',
        textAlign: 'Center',
    },
    {
        field: 'country',
        headerText: 'Country',
        width: '100',
        height: '50',
        textAlign: 'Center',
    },

    {
        field: 'region',
        headerText: 'Region',
        width: '135',
        textAlign: 'Center'
    },

    {
        field: 'source',
        headerText: 'Source',
        width: '120',
        textAlign: 'Center'
    },
];

export const Start_End_YearGrid = [
    {
        field: 'title',
        headerText: 'Title',
        width: '150',
        height: '50',
        textAlign: 'right',
    },
    {
        field: 'added',
        headerText: 'Added',
        width: '130',
        textAlign: 'center',
    },
    {
        field: 'insight',
        headerText: 'Insight',
        width: '180',
        textAlign: 'Center',
    },
    {
        field: 'url',
        headerText: 'URL Link',
        width: '180',
        textAlign: 'Center',
    },
    {
        field: 'country',
        headerText: 'Country',
        width: '100',
        height: '50',
        textAlign: 'Center',
    },

    {
        field: 'start_year',
        headerText: 'Start Year',
        width: '135',
        textAlign: 'Center'
    },

    {
        field: 'end_year',
        headerText: 'End Year',
        width: '120',
        textAlign: 'Center'
    },
];


export const PestleGrid = [
    {
        field: 'title',
        headerText: 'Title',
        width: '150',
        height: '50',
        textAlign: 'right',
    },
    {
        field: 'added',
        headerText: 'Added',
        width: '130',
        textAlign: 'center',
    },
    {
        field: 'insight',
        headerText: 'Insight',
        width: '180',
        textAlign: 'Center',
    },
    {
        field: 'url',
        headerText: 'URL Link',
        width: '180',
        textAlign: 'Center',
    },
    {
        field: 'country',
        headerText: 'Country',
        width: '100',
        height: '50',
        textAlign: 'Center',
    },

    {
        field: 'region',
        headerText: 'Region',
        width: '135',
        textAlign: 'Center'
    },

    {
        field: 'pestle',
        headerText: 'Pestle',
        width: '120',
        textAlign: 'Center'
    },
];


export const SectorGrid = [
    {
        field: 'title',
        headerText: 'Title',
        width: '150',
        height: '50',
        textAlign: 'right',
    },
    {
        field: 'added',
        headerText: 'Added',
        width: '130',
        textAlign: 'center',
    },
    {
        field: 'insight',
        headerText: 'Insight',
        width: '180',
        textAlign: 'Center',
    },
    {
        field: 'url',
        headerText: 'URL Link',
        width: '180',
        textAlign: 'Center',
    },
    {
        field: 'country',
        headerText: 'Country',
        width: '100',
        height: '50',
        textAlign: 'Center',
    },

    {
        field: 'region',
        headerText: 'Region',
        width: '135',
        textAlign: 'Center'
    },

    {
        field: 'sector',
        headerText: 'Sector',
        width: '120',
        textAlign: 'Center'
    },
];

export const TopicsGrid = [
    {
        field: 'title',
        headerText: 'Title',
        width: '150',
        height: '50',
        textAlign: 'right',
    },
    {
        field: 'added',
        headerText: 'Added',
        width: '130',
        textAlign: 'center',
    },
    {
        field: 'insight',
        headerText: 'Insight',
        width: '180',
        textAlign: 'Center',
    },
    {
        field: 'url',
        headerText: 'URL Link',
        width: '180',
        textAlign: 'Center',
    },
    {
        field: 'country',
        headerText: 'Country',
        width: '100',
        height: '50',
        textAlign: 'Center',
    },

    {
        field: 'region',
        headerText: 'Region',
        width: '135',
        textAlign: 'Center'
    },

    {
        field: 'topic',
        headerText: 'Topics',
        width: '120',
        textAlign: 'Center'
    },
];