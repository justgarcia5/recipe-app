import React from 'react'

class Checkbox extends React.Component {
  state = {
    checked: false
  }

  checkBoxHandler = (e) => {
    let checked = e.target.checked
    if(checked === true) {
      console.log(this.props.recipe)
    } else {
      console.log("false")
      this.setState({ checked: checked })
    }
  }

  render () {
    return (
      <div>
        <input
          type="checkbox"
          onChange={this.checkBoxHandler}
        />
      </div>
    )
  }
}

export default Checkbox
