import styles from './services.module.css';
import data from './data';
import Card from '../../components/Card';

export default function Services() {
  return (
    <section id="services">
      <h2>My Services</h2>
      <p>I give you the best in all the services below</p>
      <div className={`container  ${styles.services__container}`}>
        {data.map(({ id, title, desc, icon: Icon }) => (
          <div key={id} className={styles.service}>
            <Card className="service" theme="light">
              <div className={styles['service__icon']}>{<Icon />}</div>
              <div className="service__details">
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
