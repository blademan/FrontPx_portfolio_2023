import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import Card from '../../components/Card';
import styles from './faqs.module.css';

export default function FAQ({ question, answer }) {
  const [faqToggle, setFaqToggle] = useState(false);

  return (
    <Card className="faq" onClick={() => setFaqToggle((prev) => !prev)}>
      <div className="">
        <h5 className={styles.faq__question}>{question}</h5>
        <button className={styles.faq__icon}>
          {faqToggle ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>

      {faqToggle && <p className={styles.faq__answer}>{answer}</p>}
    </Card>
  );
}
