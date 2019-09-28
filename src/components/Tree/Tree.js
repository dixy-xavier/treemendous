import React, { useEffect, useState } from 'react';
import Dialog from '../Dialog/Dialog';
import Image from '../Image/Image';
import Loader from '../Loader/Loader';
import styles from './Tree.css';

const Tree = ({ tree }) => {
  const [loading, toggleLoading] = useState(false);
  const [showError, toggleError] = useState(false);
  const [displayImage, toggleImage] = useState(false);
  const [displayDialog, toggleDialog] = useState(false);
  useEffect(() => {
    if (displayImage && !loading) {
      toggleLoading(true);
    }
  }, [displayImage]);

  return (
    <div className={styles.wrapper} onClick={() => toggleImage(!displayImage)}>
      <div>Name: {tree.name}</div>
      <div>Species Name: {tree.species_name}</div>
      {displayImage && (
        showError ? <div className={styles.error}>Something went wrong</div> : <Image
          alt={tree.name}
          src={tree.image}
          className={styles.image}
          onClick={(e) => {
            e.stopPropagation();
            toggleDialog(true);
          }}
          onLoad={() => toggleLoading(false)}
          onError={() => {
            toggleLoading(false);
            toggleError(true);
          }}
        />
      )}
      {loading && <Loader classes={{ wrapper: styles.loader }} />}
      {displayDialog && <Dialog
        title={`${tree.name} (${tree.species_name})`}
        image={tree.image}
        toggleDialog={() => toggleDialog(false)}
      />}
    </div>
  );
};

export default Tree;
