import React, { PropTypes } from 'react'

class Message extends React.Component {
  render () {
    let styles={
      box1:{
        whith:'100%',
        height:'80vh',
        display:'flex',
        flexDirection: 'row',
      },
      lefgt:{
        width:'40vw',
        backgroundColor:'#16b5c5',
        justifyContent:'center',
        padding:'3vw 5vw',
        fontSize:'3.5vh',
        color:'#fff'
      },
      lefta:{
        width:'40vw',
        backgroundColor: 'rgba(0,0,0,0.6)',
        background:'url(https://coding.net/u/xiaoxiaozhang-/p/imgs/git/raw/master/img/e03c1cae0b4e22529501bee9491cf71e.jpg) no-repeat  fixed left top',
        backgroundSize:'52% 100%'
      },
      leftb:{
        width:'40vw',
        backgroundColor: 'rgba(0,0,0,0.6)',
        background:'url(https://coding.net/u/xiaoxiaozhang-/p/imgs/git/raw/master/img/q1.jpeg) no-repeat  fixed left top',
        backgroundSize:'52% 100%'
      },
      righte:{
        width:'40vw',
        backgroundColor: 'rgba(0,0,0,0.6)',
        background:'url(https://coding.net/u/xiaoxiaozhang-/p/imgs/git/raw/master/img/d4263acb4f807f7aad6ab48a872cdcb3.jpg) no-repeat  fixed right top',
        backgroundSize:'52% 100%'
      },
      rightr:{
        width:'40vw',
        backgroundColor: 'rgba(0,0,0,0.6)',
        background:'url(https://coding.net/u/xiaoxiaozhang-/p/imgs/git/raw/master/img/q22.jpg) no-repeat  fixed right top ',
        backgroundSize:'52% 100%',
      },
      sp:{
        padding:'1vh 4vh',
        lineHeight:'7vh',
        textAlign:'center',
        borderRadius:'5px',
        backgroundColor:'#ff4081',
        color:'#fff',
        margin:'0 auto',
        marginBottom:'7vh',
        display:'block',
        width:'12vw',
        fontSize:'1.5vw'
      }
    }
    return(
      <div>
        <div style={styles.box1}>
          <div style={styles.lefta}>
          </div>
          <div style={styles.lefgt}>
            <span style={styles.sp}>基本资料</span>
            <p>姓名：张小晓</p>
            <p>性别：女</p>
            <p>年龄：22岁</p>
            <p>籍贯：吉林</p>
            <p>学历：本科</p>
            <p>专业：计算机科学与技术</p>
            <p>毕业于石家庄建工科技学院</p>
          </div>
        </div>
        <div style={styles.box1}>
          <div style={styles.lefgt}>
            <span style={styles.sp}>个人技能</span>
            <p>1. 熟悉Linux操作系统，熟练使用Git命令行操作，并有在Linux系统上开发的经验；</p>
            <p>2. 掌握Nodejs熟练运用Express后台框架,Mongodb数据库；</p>
            <p>3. 了解前后台API数据传递.通过Ajax请求，实现前后台数据的增删改查；</p>
          </div>
          <div style={styles.rightr}>
          </div>
        </div>
        <div style={styles.box1}>
          <div style={styles.leftb}>
          </div>
          <div style={styles.lefgt}>
            <span style={styles.sp}>个人技能</span>
            <p>4. 熟练运用React前端框架，实现组件化开发，
              熟练运用React各类组件，Bootstrap库和Material-UI 等等；</p>
            <p>5. 能够熟练操作github，掌握ES5、ES6语法；</p>
            <p>6. 掌握javascript语言，精通jquery，能够实现网页的动态效果与页面交互；</p>
          </div>
        </div>
        <div style={styles.box1}>
          <div style={styles.lefgt}>
            <span style={styles.sp}>个人技能</span>
            <p>7. 熟练掌握响应式设计，能够开发移动端页面；熟练使用zepto,swiper手机端应用库；</p>
            <p>8. 精通HTML5+CSS3、DIV+CSS等网站前端技术；</p>
            <p>9. 熟练使用Atom、 Sublime、Photoshop 等软件，掌握网站效果图的制作、
              切片以及HTML页面代码优化等技术</p>
          </div>
          <div style={styles.righte}>
          </div>
        </div>
      </div>
    )
  }
}

export default Message;
