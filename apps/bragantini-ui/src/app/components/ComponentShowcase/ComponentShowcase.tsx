// apps/bragantini-ui/src/app/components/ComponentShowcase/ComponentShowcase.tsx
import styles from './ComponentShowcase.module.css';
import ButtonDemo from './demos/ButtonDemo';
import SearchBarDemo from './demos/SearchBarDemo';
import TableDemo from './demos/TableDemo';
import CalendarDemo from './demos/CalendarDemo';
import AccordionDemo from './demos/AccordionDemo';

export default function ComponentShowcase() {
  return (
    <section id="components" className={styles.showcase}>
      <div className={styles.container}>
        <h2 className={styles.title}>Componenti</h2>
        <p className={styles.description}>
          Esplora la nostra collezione di componenti pronti all'uso
        </p>

        <div className={styles.components}>
          <ButtonDemo />
          <SearchBarDemo />
          <TableDemo />
          <CalendarDemo />
          <AccordionDemo />
        </div>
      </div>
    </section>
  );
}