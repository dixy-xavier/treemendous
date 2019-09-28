import React, { useEffect, useState } from 'react';
import Subheader from '../Subheader/Subheader';
import Trees from '../Trees/Trees';
import { GET_TREES } from './Main.constants';
import styles from './Main.css';
import { request } from './Main.utils';

const Main = () => {
  const [searchText, setSearchText] = useState('');
  const [trees, setTrees] = useState([]);
  useEffect(() => {
    request(GET_TREES).then((response) => {
      if (response.trees.length) {
        setTrees(response.trees);
      }
    });
  }, []);
  const filteredList = trees.filter(tree => tree.name.toLowerCase().includes(searchText.toLowerCase()));
  return (
    <div className={styles.wrapper}>
      <Subheader searchText={searchText} setSearchText={setSearchText} />
      {filteredList.length ? <Trees trees={filteredList} /> : <div className={styles.noData}>No trees found</div>}
    </div>
  );
};

export default Main;
