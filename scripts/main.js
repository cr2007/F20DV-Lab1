'use strict';

/***** Bar Chart *****/
let barContainer = d3.select('div#bar1'); // Select the div with id 'bar1'

let barSvg = barContainer.append('svg')
    .attr('width', 800)
    .attr('height', 500)
    .classed('barchart', true); // Add an svg child element to the div
