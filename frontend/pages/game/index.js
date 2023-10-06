import React from 'react';
import styles from './CenteredIframe.module.scss'; // Import CSS module

const CenteredIframe = () => (
<div className={styles.mainContainer}>
<div className={styles.container}>
    <iframe
      src="https://www.abcya.com/games/break_the_bank_sorting"
      className={styles.iframe}
      frameBorder="0"
      allowFullScreen
    />
  </div>
</div>
);

export default CenteredIframe;