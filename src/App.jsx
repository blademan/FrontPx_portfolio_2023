import {
  Header,
  Navbar,
  About,
  Services,
  Portfolio,
  Testimonials,
  FAQs,
  Contact,
  Footer,
  FloatingNav,
} from './sections';
import Theme from './theme/Theme';
import { useThemeContext } from './context/theme-context';
import { useRef, useState, useEffect } from 'react';

function App() {
  const { themeState } = useThemeContext();

  const mainRef = useRef();
  const [showFloatingNav, setShowFloatingNav] = useState(true);
  const [siteYPosition, setSiteYPosition] = useState(0);

  const showFloatingNavHandler = () => {
    setShowFloatingNav(true);
  };
  const hideFloatingNavHandler = () => {
    setShowFloatingNav(false);
  };

  const floatingNavToggleHandler = () => {
    if (
      siteYPosition < mainRef?.current?.getBoundingClientRect().y - 20 ||
      siteYPosition > mainRef?.current?.getBoundingClientRect().y + 20
    ) {
      showFloatingNavHandler();
    } else {
      hideFloatingNavHandler();
    }

    setSiteYPosition(mainRef?.current?.getBoundingClientRect().y);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      floatingNavToggleHandler();
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, [siteYPosition]);

  return (
    <main className={`${themeState.primary} ${themeState.background}`} ref={mainRef}>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <FAQs />
      <Contact />
      <Footer />
      <Theme />
      {showFloatingNav && <FloatingNav />}
    </main>
  );
}

export default App;
