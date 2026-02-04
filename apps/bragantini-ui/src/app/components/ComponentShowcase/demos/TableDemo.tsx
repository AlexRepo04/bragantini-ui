// apps/bragantini-ui/src/app/components/ComponentShowcase/demos/TableDemo.tsx
import styles from './Demo.module.css';

export default function TableDemo() {
  const data = [
    { id: 1, nome: 'Mario Rossi', ruolo: 'Developer', stato: 'Attivo' },
    { id: 2, nome: 'Laura Bianchi', ruolo: 'Designer', stato: 'Attivo' },
    { id: 3, nome: 'Giuseppe Verdi', ruolo: 'Manager', stato: 'Inattivo' },
  ];

  return (
    <div className={styles.demo}>
      <div className={styles.demoHeader}>
        <h3>Table</h3>
        <span className={styles.badge}>Componente 3</span>
      </div>
      <p className={styles.demoDescription}>
        Tabelle responsive con ordinamento, paginazione e selezione righe
      </p>
      
      <div className={styles.demoPreview}>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Ruolo</th>
                <th>Stato</th>
                <th>Azioni</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.nome}</td>
                  <td>{row.ruolo}</td>
                  <td>
                    <span className={row.stato === 'Attivo' ? styles.statusActive : styles.statusInactive}>
                      {row.stato}
                    </span>
                  </td>
                  <td>
                    <button className={styles.tableButton}>Modifica</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className={styles.demoCode}>
        <pre>
          <code>{`import { Table } from 'bragantini-ui';

<Table 
  data={users}
  columns={[
    { key: 'name', label: 'Nome' },
    { key: 'role', label: 'Ruolo' }
  ]}
  sortable
  pagination
/>`}</code>
        </pre>
      </div>
    </div>
  );
}