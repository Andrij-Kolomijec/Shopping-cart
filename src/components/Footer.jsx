import classes from "./Footer.module.css";

function Footer() {
  return (
    <div className={classes.footer}>
      <a href="https://github.com/Andrij-Kolomijec">
        <img title="More of my work" src="/github.svg" alt="Github Link" />
      </a>
    </div>
  );
}

export default Footer;
