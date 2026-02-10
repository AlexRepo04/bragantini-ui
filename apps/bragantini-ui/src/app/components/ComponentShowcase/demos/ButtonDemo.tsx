// apps/bragantini-ui/src/app/components/ComponentShowcase/demos/ButtonDemo.tsx
import styles from './Demo.module.css';

export default function ButtonDemo() {
  const renderButtons = () => (
    <>
      <div className={styles.buttonGroup}>
        <button className={`${styles.button} ${styles.primary}`}>Primary</button>
        <button className={`${styles.button} ${styles.secondary}`}>Secondary</button>
        <button className={`${styles.button} ${styles.outline}`}>Outline</button>
        <button className={`${styles.button} ${styles.ghost}`}>Ghost</button>
      </div>
      <div className={styles.buttonGroup}>
        <button className={`${styles.button} ${styles.primary} ${styles.small}`}>Small</button>
        <button className={`${styles.button} ${styles.primary} ${styles.medium}`}>Medium</button>
        <button className={`${styles.button} ${styles.primary} ${styles.large}`}>Large</button>
      </div>
      <div className={styles.buttonGroup}>
        <button className={`${styles.button} ${styles.primary}`} disabled>Disabled</button>
        <button className={`${styles.button} ${styles.danger}`}>Danger</button>
        <button className={`${styles.button} ${styles.success}`}>Success</button>
      </div>
    </>
  );

  return (
    <div className={styles.demo}>
      <div className={styles.demoHeader}>
        <h3>Button</h3>
        <span className={styles.badge}>Componente 1</span>
      </div>
      <p className={styles.demoDescription}>
        Bottoni versatili con diverse varianti, dimensioni e stati
      </p>
      
      <div className={styles.demoPreview}>
        <div className={styles.previewVariant}>
          <div className={styles.variantLabel}>Dark</div>
          <div className={styles.variantContent}>
            {renderButtons()}
          </div>
        </div>
        <div className={`${styles.previewVariant} ${styles.light}`}>
          <div className={styles.variantLabel}>Light</div>
          <div className={styles.variantContent}>
            {renderButtons()}
          </div>
        </div>
      </div>

      <div className={styles.demoCode}>
        <pre>
          <code>{`import { Button } from 'bragantini-ui';

<Button variant="primary">Click me</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button size="small">Small</Button>
<Button disabled>Disabled</Button>`}</code>
        </pre>
      </div>
    </div>
  );
}