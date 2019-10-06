import React from 'react'

class Errors extends React.Component{
  render(){
    const { errors } = this.props
    return(
      <div>
        {errors &&
          <div className="error-div">
            <h2 className="error-header">The following errors have prevented you to save:</h2>
            <ul className="error-list">
              {Object.keys(errors).map((key, index) => {
                return (
                  <li className="error-text" key={index}>
                    {key}
                    {" "}
                    {errors[key].join(', ')}
                  </li>)
                })
              }
            </ul>
          </div>
        }
      </div>
    )
  }
}

export default Errors
