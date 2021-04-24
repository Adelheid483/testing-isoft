import React from 'react';
import styles from './App.module.scss';
import {useForm} from "react-hook-form";
import Button from "../Button/Button";
//import Input from "../Input/Input";

interface MyForm {
    firstName: string,
    lastName: string,
}

export default function App() {
    const {register, handleSubmit} = useForm<MyForm>();

    const onSubmit = handleSubmit((data) => {
        console.log(data)
    });

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <form action="" className={styles.form} onSubmit={onSubmit}>
                    <section>
                        <label htmlFor="firstName">Имя</label>
                        <input
                            type="text"
                            id="firstName"
                            {...register("firstName", {required: true})}
                        />
                    </section>
                    <section>
                        <label htmlFor="lastName">Фамилия</label>
                        <input
                            type="text"
                            id="lastName"
                            {...register("lastName", {required: true})}
                        />
                    </section>
                    <Button />
                </form>
            </div>
        </div>
    );
};
