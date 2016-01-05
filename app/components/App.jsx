import React from 'react';
var SearchTool = require('./SearchTool.jsx');
import imageLocations from '../src/images.json';

var App = React.createClass({
	getInitialState: function() {
		return {
			searchKeyword: null,
			images: []
		};
	},
	handleSearch: function(keyword) {
		var images = this.fetchImages(keyword);
		this.setState({images: images, searchKeyword: keyword});
	},
	handleOnScroll: function() {
		// TODO implement me!
		return true;
	},
	fetchImages: function(keyword, offset, numImages) {
		// TODO implement me!
		// for now ignore offset and numImages
		var locations = imageLocations[keyword];
		return locations;
	},
	render: function() {
		return (
			<div>
				<SearchTool handleSearch={this.handleSearch} />
				<ImagesDrawer images={this.state.images}/>
			</div>
		);
	}
});


var ImagesDrawer = React.createClass({
	render: function() {
		var images = [];
		alert(this.props.images);
		if (!!this.props.images) {
			var count = 1;
			images = this.props.images.map(function(image) {
				console.log(count);
				var key = "image" + count++;
				return <ImageWrapper key={key} src={image}/>
			});		
		}
		return (
			<table>
				<tbody>
					{images}
				</tbody>
			</table>);
	}
});

var ImageWrapper = React.createClass({
	render: function() {
		return (<tr><td><img src={this.props.src} alt='cat!' width='255.8' height='256'/></td></tr>);
	}
});


module.exports = App;