import data from './data';
import styles from './contact.module.css';

export default function Contact() {
  return (
    <section id="contacts">
      <h2>Get In Touch</h2>
      <p>Shoot me a message via any of the links below!</p>
      <div className={`container ${styles.contact__container}`}>
        {data.map(({ id, link, icon: Icon }) => (
          <a key={id} href={link} target="_blank" rel="noopener noreferrer">
            {<Icon />}
          </a>
        ))}
      </div>
    </section>
  );
}
