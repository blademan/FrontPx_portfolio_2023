import data from './data';
import FAQ from './FAQ';
import styles from './faqs.module.css';

export default function FAQs() {
  return (
    <section id="faqs">
      <h2>Frequently Asked Questions</h2>
      <p>
        Here are some questions I usually get. Click to toggle the answer, and if you still have
        some more questions, shoot me a message from the contact section!
      </p>
      <div className={`container ${styles.faqs__container}`} data-aos="fade-up">
        {data.map((faq) => (
          <FAQ key={faq.id} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
}
