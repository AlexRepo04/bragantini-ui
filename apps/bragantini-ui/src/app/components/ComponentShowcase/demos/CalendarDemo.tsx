// apps/bragantini-ui/src/app/components/ComponentShowcase/demos/CalendarDemo.tsx
import { useState } from 'react';
import styles from './Demo.module.css';

export default function CalendarDemo() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(1); // Febbraio
  const [currentYear, setCurrentYear] = useState(2026);
  
  const today = new Date(2026, 1, 10); // 10 febbraio 2026

  const months = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 
                  'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];

  // Calcola i giorni nel mese
  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Calcola il primo giorno della settimana (0 = domenica, 1 = lunedì...)
  const getFirstDayOfWeek = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const firstDayOfWeek = getFirstDayOfWeek(currentMonth, currentYear);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const isToday = (day: number) => {
    return day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear();
  };

  const isSelected = (day: number) => {
    return selectedDate && selectedDate.getDate() === day && selectedDate.getMonth() === currentMonth && selectedDate.getFullYear() === currentYear;
  };

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
            <button className={styles.calendarNav} onClick={handlePrevMonth}>‹</button>
            <h4>{months[currentMonth]} {currentYear}</h4>
            <button className={styles.calendarNav} onClick={handleNextMonth}>›</button>
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
                className={`${styles.calendarDay} ${isSelected(day) ? styles.calendarDaySelected : ''} ${isToday(day) ? styles.calendarDayToday : ''}`}
                onClick={() => setSelectedDate(new Date(currentYear, currentMonth, day))}
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