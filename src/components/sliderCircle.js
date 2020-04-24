const d3 = require('d3');

export default function () {
    let width = 420;
    let height = 200;

    const r = d3.scaleSqrt()
        .domain([0, 5000])
        .range([0, 100]);

    const c = d3.scaleSequential(d3.interpolateYlOrRd)
        .domain([0, 5000])
    ;

    function me(selection) {
        const myData = selection.datum();
        // selection.selectAll('circle')
        //     .data(myData)
        //     .join('circle')
        //     .attr('cx', width / 2)
        //     .attr('cy', height / 2)
        //     .attr('r', d => r(d))
        //     .attr('fill', d => c(d));
        //     // .attr('fill-opacity', 0.5);
        //
        // selection.selectAll('text')
        //     .data(myData)
        //     .join('text')
        //     .attr('x', width/2)
        //     .attr('y', height /2)
        //     .attr('text-anchor', 'middle')
        //     .attr('dy', 5)
        //     .text(d => d);

        const gCircle = selection.selectAll('g.circle')
            .data(myData)
            .join('g')
            .classed('circle', true);

        gCircle
            .selectAll('circle')
            .data(d => [d])
            .join('circle')
            .attr('cx', width / 2)
            .attr('cy', height / 2)
            .attr('r', d => r(d))
            .attr('fill', d => c(d))

        gCircle
            .selectAll('text')
            .data(d => [d])
            .join('text')
            .attr('x', width / 2)
            .attr('y', height / 2)
            .attr('text-anchor', 'middle')
            .attr('dy', 5)
            .text(d => d);

    }

    me.width = function (value) {
        if (!arguments.length) return width;
        width = value;
        return me;
    };

    me.height = function (value) {
        if (!arguments.length) return height;
        height = value;
        return me;
    };

    return me;
}