import React from 'react';
import styles from './Button.module.scss';

const Button = () => {
    return (
        <button type="submit" className={styles.button}>
            Готово
        </button>
    );
};

export default Button;
