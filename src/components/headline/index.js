import React from 'react'
import PropTypes from 'prop-types'

class Headline extends React.Component {
  render() {
    const { header, desc } = this.props
    return (
      <>
        {header ? (
          <div data-test='headlineComponent'>
            <h1 data-test='header'>{header}</h1>
            <p data-test='desc'>{desc}</p>
          </div>
        ) : null}
      </>
    )
  }
}

Headline.propTypes = {
  header: PropTypes.string,
  desc: PropTypes.string,
  tempArr: PropTypes.arrayOf(
    PropTypes.shape({
      fName: PropTypes.string,
      lName: PropTypes.string,
      email: PropTypes.string,
      age: PropTypes.number,
      onlineStatus: PropTypes.boolean,
    })
  ),
}
export default Headline
