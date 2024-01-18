'use strict';

import BarChart from './barChart.js';
import BubbleChart from './bubbleChart.js';

console.log(`d3.version: ${d3.version}`);

let cities = [
    {city: 'Edinburgh', pop: 506000, area: 119, alt: 47},
    {city: 'Dubai', pop: 3604000, area: 1610, alt: 5},
    {city: 'Putrajaya', pop: 109000, area: 49, alt: 38},
    {city: 'Qingdao', pop: 10071000, area: 11228, alt: 25},
    {city: 'Lagos', pop: 8048000, area: 1171, alt: 41},
    {city: 'Ottawa', pop: 1017000, area: 2790, alt: 70},
]

/***** Bar Chart *****/
let bar1 = new BarChart('div#bar1', 800, 500);

// This line transforms the cities dataset in the generic format
// that BarChart expects: [[k,v], ...]
// we will explain it further in the next lab

let citiesElevation = cities.map(d => [d.city, d.alt]);

bar1.render(citiesElevation);


/***** Bubble Chart *****/
let bubble1 = new BubbleChart('div#bubble1', 400, 800);
let citiesArea = cities.map(d => [d.city, d.alt]);
bubble1.render(citiesArea);
