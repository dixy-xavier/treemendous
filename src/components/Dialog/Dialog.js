import React from 'react';
import { IoMdClose } from 'react-icons/io';
import Image from '../Image/Image';
import styles from './Dialog.css';

const Dialog = ({ title, image, toggleDialog }) => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <div className={styles.headerWrapper}>
        <h3 className={styles.header}>{title}</h3>
        <IoMdClose onClick={toggleDialog} />
      </div>
      <div className={styles.content}>
        <Image alt={title} src={image} className={styles.image} />
      </div>
    </div>
  </div>
);

export default Dialog;
