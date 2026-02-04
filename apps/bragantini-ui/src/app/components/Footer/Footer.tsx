// apps/bragantini-ui/src/app/components/Footer/Footer.tsx
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3>Bragantini UI</h3>
            <p>Una libreria di componenti React moderna e accessibile</p>
          </div>
          
          <div className={styles.section}>
            <h4>Risorse</h4>
            <ul>
              <li><a href="#components">Componenti</a></li>
              <li><a href="#installation">Installazione</a></li>
              <li><a href="#">Documentazione</a></li>
            </ul>
          </div>
          
          <div className={styles.section}>
            <h4>Community</h4>
            <ul>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="#">Discord</a></li>
              <li><a href="#">Twitter</a></li>
            </ul>
          </div>
          
          <div className={styles.section}>
            <h4>Legale</h4>
            <ul>
              <li><a href="#">Licenza MIT</a></li>
              <li><a href="#">Privacy</a></li>
            </ul>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; 2026 Bragantini UI. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}