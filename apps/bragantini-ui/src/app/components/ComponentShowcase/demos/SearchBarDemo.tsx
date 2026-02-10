// apps/bragantini-ui/src/app/components/ComponentShowcase/demos/SearchBarDemo.tsx
import { useState } from 'react';
import styles from './Demo.module.css';

export default function SearchBarDemo() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className={styles.demo}>
      <div className={styles.demoHeader}>
        <h3>SearchBar</h3>
        <span className={styles.badge}>Componente 2</span>
      </div>
      <p className={styles.demoDescription}>
        Barra di ricerca con autocompletamento e filtri personalizzabili
      </p>
      
      <div className={styles.demoPreview}>
        <div className={styles.searchBarContainer}>
          <div className={styles.searchBar}>
            <span className={styles.searchIcon}>🔎︎</span>
            <input
              type="text"
              placeholder="Cerca componenti..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className={styles.searchInput}
            />
            {searchValue && (
              <button 
                className={styles.clearButton}
                onClick={() => setSearchValue('')}
              >
                ✕
              </button>
            )}
          </div>
          {searchValue && (
            <div className={styles.searchResults}>
              <div className={styles.searchResult}>Risultato 1: {searchValue}</div>
              <div className={styles.searchResult}>Risultato 2: {searchValue}</div>
              <div className={styles.searchResult}>Risultato 3: {searchValue}</div>
            </div>
          )}
        </div>
      </div>

      <div className={styles.demoCode}>
        <pre>
          <code>{`import { SearchBar } from 'bragantini-ui';

<SearchBar 
  placeholder="Cerca..." 
  onSearch={(value) => console.log(value)}
  suggestions={['React', 'Vue', 'Angular']}
/>`}</code>
        </pre>
      </div>
    </div>
  );
}