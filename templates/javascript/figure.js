'use strict';

function <%= name %>Fig() {
    // Set the chart defaults
    var width,
        height;

    var svg, rs;

    function fig(selection, rootScope) {

        rs = rootScope;

        selection.each(function(dataArray) {

            svg = d3.select(this)
                .append('svg')
                .attr('fill', 'none')
                .attr('width', width)
                .attr('height', height);

                // DO STUFF WITH THE SVG
        });
    }

    // Example of how to do D3-esque chain functions

    fig.width = function(value) {
        if (!arguments.length) {
            return width;
        }
        width = value;
        return fig;
    };

    fig.height = function(value) {
        if (!arguments.length) {
            return height;
        }
        height = value;
        return fig;
    };

    return fig;
}
