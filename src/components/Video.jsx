import image_3 from "../assets/images/3.jpg"
import classes from "../styles/Video.module.css"

export default function Video() {
 return (
  <a href="quiz.html"
  ><div className={classes.video}>
    <img src={image_3} alt="image_3" />
    <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
    <div className={classes.qmeta}>
     <p>10 Questions</p>
     <p>Score : Not taken yet</p>
    </div>
   </div>
  </a>
 )
}