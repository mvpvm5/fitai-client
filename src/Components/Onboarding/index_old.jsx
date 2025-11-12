import styles from "./index.module.css";

import { useState } from "react";


function App() {

    const [ name, setName ] = useState('');
    const [ gender, setGender ] = useState("Жіноча");
    const [ goal, setGoal ] = useState('Рекомпозиція');


        const handleSubmit = (e) => {
            e.preventDefault();
            
            fetch("http://localhost:5000", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: name.trim(), gender, goal }),
            });

        };

    return(
        <>
            <div className={styles.root}>
                
                <h1 className={styles.title}>Форма користувача</h1>

                <form onSubmit={handleSubmit} className={styles.form}>

                    <label className={styles.label}>
                        Ім'я

                        <input 
                            type="text"
                            className={styles.select}
                            value={name}
                            onChange={ (event) => setName(event.target.value) }
                        />

                    </label>

                    <label className={styles.label}>
                        Ціль:

                        <select 
                            className={styles.select}
                            value={goal}
                            onChange={ (event) => setGoal(event.target.value) }
                        >

                            <option value="Оберіть ціль">
                                Оберіть ціль
                            </option>

                            <option value="Схуднення">
                                Схуднення
                            </option>

                            <option value="Рекомпозиція">
                                Рекомпозиція
                            </option>

                            <option value="М'язи">
                                М'язи
                            </option>

                        </select>

                    </label>

                    <label className={styles.label}>
                        Стать:

                        <select 
                            className={styles.select}
                            value={gender}
                            onChange={ (event) => setGender(event.target.value) }
                        >

                            <option value="Чоловіча">
                                Чоловіча
                            </option>

                            <option value="Жіноча">
                                Жіноча
                            </option>

                            <option value="Інше">
                                Інше
                            </option>

                        </select>

                    </label>

                    <button type="Submit" className={styles.button}>
                        Зберегти
                    </button>

                </form>

            </div>
        </>
    );
    
}

export default App;
