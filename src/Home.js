import React from 'react';
import BarChart from './BarChart.js';

var totalVacc = 0;
var totalCS = 0;
const covidURL = 'https://api.opencovid.ca/summary?loc=ON&after=01-01-2021';

function Home() {
    return (
        <div className='HomeDiv'>
            <BarChart></BarChart>
        </div>
    );
}

export default Home;