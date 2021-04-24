import React from 'react';
import Input from "../Input/Input";
import Button from "../Button/Button";
import styles from './App.module.scss';

const App = () => {
    return (
        <form className={styles.form}>
          <Input/>
          <Input/>
          <Button/>
        </form>
    );
};

export default App;
