import React, { PropTypes } from 'react'

class Top extends React.Component {
  render () {
    let styles={
      title:{
        paddingTop:'2vh',

        fontWeight:'100',
        textAlign:'center'
      },
      tl:{
        textAlign:'center',
        color:'#666',
        marginBottom:'10vh',
      },
      txt:{
        fontSize:'16px',
        textAlign:'center',
        color:'#555',
        marginBottom:'5vh'
      }
    }
    return(
      <div style={{margin:"5vh auto"}}>
        <h2 style={styles.title}>Xiaoxiaozhang</h2>
        <h4 style={styles.tl}> Hello !</h4>
        <p style={styles.txt}>I studied computer science at college,and I have<br/>
        a year of working experience. Now, I hope to get a promotion.</p>
      </div>
    )
  }
}

export default Top;
