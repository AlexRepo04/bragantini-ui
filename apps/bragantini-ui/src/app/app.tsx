// apps/bragantini-ui/src/app/app.tsx
import styles from './app.module.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Installation from './components/Installation/Installation';
import ComponentShowcase from './components/ComponentShowcase/ComponentShowcase';
import Footer from './components/Footer/Footer';

export function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Hero />
      <Installation />
      <ComponentShowcase />
      <Footer />
    </div>
  );
}

export default App;