import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';


export default React.createClass({
	propTypes () {
		return {
			children: React.PropTypes.any,
		}
	},

	render () {
		return (
			<div>
				<div>
					<Link to={prefixLink('/')}>Syncano</Link>
				</div>
				<div>
					{this.props.children}
				</div>
			</div>
		)
	}
});
