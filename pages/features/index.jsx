import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

export default React.createClass({
	render () {
		return (
			<div>
				<h2>Features</h2>
				<Link to={prefixLink('/')}>Back to Home</Link>
			</div>
		)
	}
})
