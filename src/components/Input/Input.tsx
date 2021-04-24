import React from 'react';
import styles from './Input.module.scss';

const Input = () => {
    return (
        <input
            type="text"
            className={styles.input}
            placeholder="Name"
        />
    );
};

export default Input;
