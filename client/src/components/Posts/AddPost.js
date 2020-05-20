import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { addPost } from '../../actions/postActions'



const styles = {
  paper: {
    padding: 8
  },
  textField: {
    width: '100%'
  },
  button: {
    width: '97%',
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#800080',
    color: '#fff'
  }
}

class AddPost extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: ''
    }
    this.handleChange= this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({ text: e.target.value })
  }

  handleSubmit (e) {
    e.preventDefault()

    const postData = {
      text: this.state.text
    }
    //console.log(postData)
    this.props.addPost(postData)
    this.setState({ text: '' })
  }
  render () {
    const { classes } = this.props
    return (
      <Paper className={classes.paper.js}>
        <TextField
              multiline
              rowsMax="4"
              label="Something new ?"
              className={classes.textField}
              onChange={this.handleChange}
              value={this.state.text}
          />
        <Grid container justify="center">
          <Button
              variant="outlined"
              className={classes.button}
              onClick={this.handleSubmit}
          >
            Send
          </Button>
          </Grid>
      </Paper>
    )
  }
}

export default connect(null, { addPost })(withStyles(styles)(AddPost))
