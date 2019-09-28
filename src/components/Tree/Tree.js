import React, { useState } from 'react';
import Image from '../Image/Image';
import styles from './Tree.css';

const Tree = ({ tree }) => {
  const [displayImage, toggleImage] = useState(false);
  return (
    <div className={styles.wrapper} onClick={() => toggleImage(!displayImage)}>
      <div>Name: {tree.name}</div>
      <div>Species Name: {tree.species_name}</div>
      {displayImage && <Image alt={tree.name} src={tree.image} className={styles.image} />}
    </div>
  );
};

export default Tree;
