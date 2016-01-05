import React from 'react';

var SearchBar = React.createClass({
	handleSearch: function(event) {
		event.preventDefault();
		var keyword = this.refs.searchInput.value;
		this.props.handleSearch(keyword);	
	},
	render: function() {
		return (
			<div>
				<form onSubmit={this.handleSearch}>
					<span>
						<input type='text' ref='searchInput' />
						<input type='submit' value='Search'/>
					</span>
				</form>
			</div>);
	}
});

module.exports = SearchBar;