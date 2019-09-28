import React from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from './Search.css';

const Search = ({ searchText = '', onSearch = f => f }) => (
  <div className={styles.wrapper}>
    <FaSearch />
    <input
      className={styles.search}
      placeholder="Search by name"
      value={searchText}
      onChange={event => onSearch(event.target.value)}
    />
  </div>
);

export default Search;
