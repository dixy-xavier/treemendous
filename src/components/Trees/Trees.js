import React from 'react';
import Tree from '../Tree/Tree';
import styles from './Trees.css';

const Trees = ({ trees }) => (
  <div className={styles.wrapper}>
    {trees.map(tree => (
      <Tree key={tree.name} tree={tree} />
    ))}
  </div>
);

export default Trees;
