import classes from "./About.module.css";

function About() {
  return (
    <div className={classes.about}>
      <div>
        This is a project from&nbsp;
        <a href="https://www.theodinproject.com/lessons/node-path-react-new-shopping-cart">
          The Odin Project
        </a>
        &nbsp;course.
      </div>
      <div>
        Fake store data by&nbsp;
        <a href="https://fakestoreapi.com/">Fakestoreapi</a>.
      </div>
      <div>
        Background picture from&nbsp;
        <a href="https://www.freepik.com/free-photo/black-friday-elements-assortment_17658453.htm#query=ecommerce%20background&position=3&from_view=keyword&track=ais&uuid=6971a8c9-2fde-407d-a07d-24a60a7f60fb">
          Freepik
        </a>
        .
      </div>
      <div>
        Icons by <a href="https://pictogrammers.com/">Pictogrammers</a>.
      </div>
    </div>
  );
}

export default About;
