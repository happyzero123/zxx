import React, { PropTypes } from 'react'
import Message from './Message'
class About extends React.Component {

  render () {
    let styles={
      root:{
        margin:'5vh auto'
      },
      hh:{
        color:'#16b5c5',
        marginBottom:'6vh',
        fontSize:'3vw',
        textShadow:'4px 6px 5px #ccc',
        fontWeight:'600',
        fontFamily:'微软雅黑'
      }

    }
    return(
      <div style={styles.root}>
        <h2 style={styles.hh}>About Me</h2>
        <Message  />


      </div>
    )
  }
}

export default About;
