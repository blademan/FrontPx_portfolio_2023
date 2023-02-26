import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import Card from '../../components/Card';
import styles from './faqs.module.css';

const FAQ = ({ question, answer }) => {
  const [faqToggle, setFaqToggle] = useState(false);

  return (
    <Card className="faq" onClick={() => setFaqToggle((prev) => !prev)}>
      {/* The div element that wraps the question and toggle button has an aria-expanded attribute set to the value of faqToggle for accessibility purposes.  */}
      <div aria-expanded={faqToggle}>
        <h5 className={styles.faq__question}>{question}</h5>
        <button className={styles.faq__icon}>
          {faqToggle ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {/*  If faqToggle is true, the answer to the question is displayed in a p element.  */}
      {faqToggle && <p className={styles.faq__answer}>{answer}</p>}
    </Card>
  );
};
export default FAQ;
