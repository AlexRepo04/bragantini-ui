// apps/bragantini-ui/src/app/components/ComponentShowcase/demos/AccordionDemo.tsx
import { useState } from 'react';
import styles from './Demo.module.css';

export default function AccordionDemo() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [openIndexLight, setOpenIndexLight] = useState<number | null>(0);

  const items = [
    {
      title: 'Cos\'è Bragantini UI?',
      content: 'Bragantini UI è una libreria di componenti React moderna, progettata per essere facile da usare e altamente personalizzabile.'
    },
    {
      title: 'Come si installa?',
      content: 'Puoi installare la libreria usando npm o yarn: npm install bragantini-ui'
    },
    {
      title: 'È compatibile con TypeScript?',
      content: 'Sì! Tutti i componenti sono scritti in TypeScript e includono definizioni di tipo complete.'
    },
  ];

  const renderAccordion = (openIndex: number | null, setOpenIndex: (index: number | null) => void) => (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <div key={index} className={styles.accordionItem}>
          <button
            className={styles.accordionHeader}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span>{item.title}</span>
            <span className={`${styles.accordionIcon} ${openIndex === index ? styles.accordionIconOpen : ''}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m6 9l6 6l6-6"/></svg>
            </span>
          </button>
          <div className={`${styles.accordionContent} ${openIndex === index ? styles.accordionContentOpen : ''}`}>
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className={styles.demo}>
      <div className={styles.demoHeader}>
        <h3>Accordion</h3>
        <span className={styles.badge}>Componente 5</span>
      </div>
      <p className={styles.demoDescription}>
        Pannelli espandibili per organizzare contenuti in modo compatto
      </p>
      
      <div className={styles.demoPreview}>
        <div className={styles.previewVariant}>
          <div className={styles.variantLabel}>Dark</div>
          <div className={styles.variantContent}>
            {renderAccordion(openIndex, setOpenIndex)}
          </div>
        </div>
        <div className={`${styles.previewVariant} ${styles.light}`}>
          <div className={styles.variantLabel}>Light</div>
          <div className={styles.variantContent}>
            {renderAccordion(openIndexLight, setOpenIndexLight)}
          </div>
        </div>
      </div>

      <div className={styles.demoCode}>
        <pre>
          <code>{`import { Accordion } from 'bragantini-ui';

<Accordion>
  <Accordion.Item title="Titolo 1">
    Contenuto del primo pannello
  </Accordion.Item>
  <Accordion.Item title="Titolo 2">
    Contenuto del secondo pannello
  </Accordion.Item>
</Accordion>`}</code>
        </pre>
      </div>
    </div>
  );
}