import styles from './floating-nav.module.css';
import data from './data';
import Scrollspy from 'react-scrollspy';
import Nav from './Nav';

export default function FloatingNav() {
  console.log(data);
  return (
    <ul id="floating__nav" className={styles['floating__nav']}>
      <Scrollspy
        offset={-400}
        className="scrollspy"
        items={['header', 'about', 'services', 'portfolio', 'contact']}
        currentClassName="active"
      >
        {data.map((item) => (
          <Nav key={item.id} item={item} />
        ))}
      </Scrollspy>
    </ul>
  );
}
