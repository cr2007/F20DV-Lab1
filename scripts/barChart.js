export default class BarChart {

    // Attributes (you can make those private too)
    width; height;    // Size
    svg; chart; bars; // Selections
    data;             // Internal Data

    // Constructor
    constructor(container, width, height) {
        this.width = width;
        this.height = height;

        this.svg = d3.select(container).append('svg')
            .classed('barchart', true)
            .attr('width', width).attr('height', height);
        this.chart = this.svg.append('g')
        this.bars = this.chart.selectAll('rect.bar')
    }

    // Private methods
    // data is in the format [[key, value], ...]
    #updateBars() {
        this.bars = this.bars
            .data(this.data, d => d[0])
            .join('rect')
            .classed('bar', true)
            .attr('x', (d, i) => i*40+5)
            .attr('y', d => this.height - d[1]*10)
            .attr('width', 40)
            .attr('height', d => d[1]*10);
    }

    // Public API

    // The dataset parameter needs to be in a generic format,
    // so that it works for all future data
    // here we assume a [[k, v], ...] format for efficiency
    render(dataset) {
        this.data = dataset;
        this.#updateBars();
        return this; // to allow chaining
    }
}
