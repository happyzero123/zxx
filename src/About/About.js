import React, { PropTypes } from 'react'
import Message from './Message'
class About extends React.Component {

  render () {
    let styles={
      root:{
        margin:'5vh auto'
      },
      sp:{
        padding:'1vh 4vh',
        lineHeight:'7vh',
        textAlign:'center',
        borderRadius:'5px',
        backgroundColor:'#ff4081',
        color:'#fff',
        marginRight:'20vh'
      }
    }
    return(
      <div style={styles.root}>
        <span style={styles.sp}>基本资料</span>
        <span style={styles.sp}>个人技能</span>
        <Message  />
      </div>
    )
  }
}

export default About;
