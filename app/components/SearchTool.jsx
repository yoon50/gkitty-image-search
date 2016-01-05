import React from 'react';

var SearchTool = React.createClass({
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
						<input ref='searchInput' type='text' />
						<input type='submit' value='Search'/>
					</span>
				</form>
			</div>);
	}
});

module.exports = SearchTool;