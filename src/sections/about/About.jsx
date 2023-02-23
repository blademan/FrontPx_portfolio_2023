import styles from './about.module.css';

export default function About() {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <img src="" alt="About Image" />
        </div>
      </div>
      <div className="about__right">
        <h2>About Me</h2>
        <div className="about__cards"></div>
      </div>
    </section>
  );
}
