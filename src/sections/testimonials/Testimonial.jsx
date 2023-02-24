import Card from '../../components/Card';
import styles from './testimonials.module.css';

export default function Testimonial({ slide }) {
  return (
    <Card className="light">
      <p>{slide.quote}</p>
      <div className={styles['testimonial__client']}>
        <div className={styles['testimonial__client-avatar']}>
          <img src={slide.avatar} alt="Avatar" />
        </div>
        <div className={styles['testimonial__client-details']}>
          <h6>{slide.name}</h6>
          <small>{slide.profession}</small>
        </div>
      </div>
    </Card>
  );
}
