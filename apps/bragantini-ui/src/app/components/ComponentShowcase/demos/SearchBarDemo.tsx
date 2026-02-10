// apps/bragantini-ui/src/app/components/ComponentShowcase/demos/SearchBarDemo.tsx
import { useState } from 'react';
import styles from './Demo.module.css';

export default function SearchBarDemo() {
  const [searchValue, setSearchValue] = useState('');
  const [searchValueLight, setSearchValueLight] = useState('');

  const renderSearchBar = (value: string, onChange: (val: string) => void) => (
    <div className={styles.searchBarContainer}>
      <div className={styles.searchBar}>
        <span className={styles.searchIcon}>🔎︎</span>
        <input
          type="text"
          placeholder="Cerca componenti..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={styles.searchInput}
        />
        {value && (
          <button 
            className={styles.clearButton}
            onClick={() => onChange('')}
          >
            ✕
          </button>
        )}
      </div>
      {value && (
        <div className={styles.searchResults}>
          <div className={styles.searchResult}>Risultato 1: {value}</div>
          <div className={styles.searchResult}>Risultato 2: {value}</div>
          <div className={styles.searchResult}>Risultato 3: {value}</div>
        </div>
      )}
    </div>
  );

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
        <div className={styles.previewVariant}>
          <div className={styles.variantLabel}>Dark</div>
          <div className={styles.variantContent}>
            {renderSearchBar(searchValue, setSearchValue)}
          </div>
        </div>
        <div className={`${styles.previewVariant} ${styles.light}`}>
          <div className={styles.variantLabel}>Light</div>
          <div className={styles.variantContent}>
            {renderSearchBar(searchValueLight, setSearchValueLight)}
          </div>
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