// apps/bragantini-ui/src/app/components/Header/Header.tsx
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>Bragantini UI</h1>
        <nav className={styles.nav}>
          <a href="#installation">Installazione</a>
          <a href="#components">Componenti</a>
          <a href="https://github.com/fullstacchioni-2426/bragantini-ui" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}