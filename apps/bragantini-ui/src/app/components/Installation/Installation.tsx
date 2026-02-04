// apps/bragantini-ui/src/app/components/Installation/Installation.tsx
import styles from './Installation.module.css';

export default function Installation() {
  return (
    <section id="installation" className={styles.installation}>
      <div className={styles.container}>
        <h2 className={styles.title}>Installazione</h2>
        <div className={styles.codeBlock}>
          <pre>
            <code>npm install bragantini-ui</code>
          </pre>
          <button className={styles.copyButton} onClick={() => navigator.clipboard.writeText('npm install bragantini-ui')}>
            Copia
          </button>
        </div>
        <p className={styles.or}>oppure</p>
        <div className={styles.codeBlock}>
          <pre>
            <code>yarn add bragantini-ui</code>
          </pre>
          <button className={styles.copyButton} onClick={() => navigator.clipboard.writeText('yarn add bragantini-ui')}>
            Copia
          </button>
        </div>
        <div className={styles.usage}>
          <h3>Utilizzo</h3>
          <div className={styles.codeBlock}>
            <pre>
              <code>{`import { Button, SearchBar, Table } from 'bragantini-ui';

function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <SearchBar placeholder="Cerca..." />
    </div>
  );
}`}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}