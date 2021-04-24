import React from 'react';
import styles from './Input.module.scss';

// @ts-ignore
const Input = ({item}) => {
    return (
        <section>
            <label htmlFor="input">{item}</label>
            <input
                type="text"
                id="input"
                name="input"
                className={styles.input}
            />
        </section>
    );
};

export default Input;
