// apps/bragantini-ui/src/app/components/Hero/Hero.tsx
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>Bragantini UI</h1>
        <p className={styles.subtitle}>
          Una libreria di componenti React moderna, accessibile e facile da usare
        </p>
        <div className={styles.features}>
          <div className={styles.feature}>
            <span className={styles.icon}>🎨</span>
            <h3>Design Moderno</h3>
            <p>Componenti eleganti con animazioni fluide</p>
          </div>
          <div className={styles.feature}>
            <span className={styles.icon}>⚡</span>
            <h3>Performante</h3>
            <p>Ottimizzato per velocità e bundle size ridotto</p>
          </div>
          <div className={styles.feature}>
            <span className={styles.icon}>♿</span>
            <h3>Accessibile</h3>
            <p>Conforme agli standard ARIA</p>
          </div>
          <div className={styles.feature}>
            <span className={styles.icon}>🎯</span>
            <h3>TypeScript</h3>
            <p>Type-safe con autocompletamento completo</p>
          </div>
        </div>
      </div>
    </section>
  );
}