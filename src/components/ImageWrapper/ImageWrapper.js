import React from 'react';
import Image from '../Image/Image';
import styles from './ImageWrapper.css';

const ImageWrapper = (props) => (
  <div className={styles.wrapper}>
    <a href={props.src} className={styles.anchor}>View in full size</a>
    <Image
      {...props}
    />
  </div>
);

export default ImageWrapper;
