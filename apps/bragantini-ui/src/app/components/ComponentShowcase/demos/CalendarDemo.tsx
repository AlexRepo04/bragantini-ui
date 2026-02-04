// apps/bragantini-ui/src/app/components/ComponentShowcase/demos/CalendarDemo.tsx
import { useState } from 'react';
import styles from './Demo.module.css';

export default function CalendarDemo() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  
  const daysInMonth = 31;
  const firstDayOfWeek = 3; // Mercoledì
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className={styles.demo}>
      <div className={styles.demoHeader}>
        <h3>Calendar</h3>
        <span className={styles.badge}>Componente 4</span>
      </div>
      <p className={styles.demoDescription}>
        Calendario interattivo con selezione date, range e eventi personalizzati
      </p>
      
      <div className={styles.demoPreview}>
        <div className={styles.calendar}>
          <div className={styles.calendarHeader}>
            <button className={styles.calendarNav}>‹</button>
            <h4>Gennaio 2026</h4>
            <button className={styles.calendarNav}>›</button>
          </div>
          <div className={styles.calendarGrid}>
            {['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom'].map((day) => (
              <div key={day} className={styles.calendarDayName}>{day}</div>
            ))}
            {Array.from({ length: firstDayOfWeek }).map((_, i) => (
              <div key={`empty-${i}`} className={styles.calendarDayEmpty} />
            ))}
            {days.map((day) => (
              <button
                key={day}
                className={`${styles.calendarDay} ${day === 15 ? styles.calendarDaySelected : ''}`}
                onClick={() => setSelectedDate(new Date(2026, 0, day))}
              >
                {day}
              </button>
            ))}
          </div>
          {selectedDate && (
            <div className={styles.calendarFooter}>
              Selezionato: {selectedDate.toLocaleDateString('it-IT')}
            </div>
          )}
        </div>
      </div>

      <div className={styles.demoCode}>
        <pre>
          <code>{`import { Calendar } from 'bragantini-ui';

<Calendar 
  value={selectedDate}
  onChange={setSelectedDate}
  minDate={new Date()}
  events={[
    { date: '2026-01-15', label: 'Meeting' }
  ]}
/>`}</code>
        </pre>
      </div>
    </div>
  );
}