import React from 'react';

var ImageGrid = React.createClass({
    render: function() {
        var images = [];
        if (!!this.props.images) {
            var count = 0;
            images = this.props.images.map(function(image) {
                var key = "image" + count++;
                return <ImageWrapper key={key} src={image}/>
            });
        }
        return (
            <table>
                <tbody>
                <tr>{images}</tr>
                </tbody>
            </table>);
    }
});

var ImageWrapper = React.createClass({
    render: function() {
        return (<td><img src={this.props.src} width='255.8' height='256'/></td>);
    }
});

module.exports = ImageGrid;