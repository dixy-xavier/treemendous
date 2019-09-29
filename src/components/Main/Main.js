import React, { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import Subheader from '../Subheader/Subheader';
import Trees from '../Trees/Trees';
import { GET_TREES } from './Main.constants';
import { request } from './Main.utils';
import styles from './Main.css';

const NoData = () => (<div className={styles.noData}>No trees found</div>);

const Main = () => {
  const [searchText, setSearchText] = useState('');
  const [loading, toggleLoading] = useState(true);
  const [trees, setTrees] = useState([]);
  useEffect(() => {
    request(GET_TREES).then((response) => {
      if (response.trees.length) {
        setTrees(response.trees);
        toggleLoading(false);
      }
    });
  }, []);
  const filteredList = trees.filter(tree => tree.name.toLowerCase().includes(searchText.toLowerCase()));
  return (
    <div className={styles.wrapper}>
      <Subheader searchText={searchText} setSearchText={setSearchText} />
      {filteredList.length ? <Trees trees={filteredList} /> : <NoData />}
      {loading && <Loader classes={{ wrapper: styles.loader}} />}
    </div>
  );
};

export default Main;
