import React from 'react'

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

export default Headline
