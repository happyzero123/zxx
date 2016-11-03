import React, { PropTypes } from 'react'

class Home extends React.Component {
  render () {
    let styles={
      lin:{
        textAlign:'center',
        paddingTop:'100px'
      }
    }
    return(
      <div>
        <p style={styles.lin}>Or continue scrolling to see everything (the boring way)</p>
      </div>
    )
  }
}

export default Home;
