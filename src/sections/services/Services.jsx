import styles from './services.module.css';
import data from './data';
import Card from '../../components/Card';

export default function Services() {
  return (
    <section id="services">
      <h2>My Services</h2>
      <p>I give you the best in all the services below</p>
      <div className={`container  ${styles.services__container}`}>
        {data.map(({ id, title, desc, icon }) => (
          <Card
            key={id}
            title={title}
            desc={desc}
            theme="light"
            className="service"
            Icon={icon}
            iconStyle="service__icon"
          />
        ))}
      </div>
    </section>
  );
}
