import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

import './sitemap.scss'

export default React.createClass({
	render () {
		return (
			<div>
				<ul>
					<li><Link to={prefixLink('/pricing/')}>Pricing</Link></li>
					<li><Link to={prefixLink('/features/')}>Features</Link></li>
					<li><Link to={prefixLink('/contact/')}>Contact</Link></li>
					<li><Link to={prefixLink('/about/')}>About</Link></li>
					<li><Link to={prefixLink('/randomwordsfor404error/')}>404</Link></li>
				</ul>
			</div>
		)
	}
});
