import React, { useEffect, useState } from 'react';
import Dialog from '../Dialog/Dialog';
import ImageWrapper from '../ImageWrapper/ImageWrapper';
import Loader from '../Loader/Loader';
import styles from './Tree.css';

const LabelValue = ({ label, value }) => <div>{`${label}: ${value}`}</div>;

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
      <LabelValue label="Name" value={tree.name} />
      <LabelValue label="Species Name" value={tree.species_name} />
      {displayImage && (
        showError ? <div className={styles.error}>Something went wrong</div> : <ImageWrapper
          alt={tree.name}
          src={tree.image}
          className={styles.image}
          onLoad={() => toggleLoading(false)}
          onClick={(e) => {
            e.stopPropagation();
            toggleDialog(true);
          }}
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
        toggleDialog={(e) => {
          e.stopPropagation();
          toggleDialog(false);
        }}
      />}
    </div>
  );
};

export default Tree;
