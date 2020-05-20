import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { Link } from 'react-router-dom'

const styles = {
	paper: {
		padding: 10,
		display: 'flex',
		marginTop: 10,
	},
	avatar: {
		minWidth: 10,
		margin: '4px 10px 4px 4px'
	},
	login: {
		marginBottom: 5
	},
	time: {
		marginLeft: 10,
		color: '#bbb',
		fontSize: 14
	}
}

class Post extends Component {
	render () {
		const { classes, post } = this.props
		return (
			<Paper className={classes.paper}>
				<div
					className={classes.avatar}
					style={{
						backgroundColor: '#000'
					}}
				/>
				<div>
					<h1>{post.user.login}</h1>
						<span>{post.createdAt}</span>

					<h2>{post.text}</h2>
				</div>
			</Paper>
		)
	}
}


export default withStyles(styles)(Post)
