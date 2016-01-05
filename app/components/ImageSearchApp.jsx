import React from 'react';

var SearchBar = require('./SearchBar.jsx');
var ImageGrid = require('./ImageGrid.jsx');

var ImageSearchApp = React.createClass({
	getInitialState: function() {
		return {
			searchKeyword: null,
			images: [
                "https://pbs.twimg.com/profile_images/603255697002790912/dSoMJigf.jpg",
                "https://pbs.twimg.com/profile_images/659017415339220992/0QxomPDQ.jpg",
                "https://pbs.twimg.com/profile_images/593524111529250818/5qvtEUVD.jpg"
            ]
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
		return [];
	},
	render: function() {
		return (
			<div>
				<SearchBar handleSearch={this.handleSearch} />
				<ImageGrid images={this.state.images}/>
			</div>
		);
	}
});

module.exports = ImageSearchApp;