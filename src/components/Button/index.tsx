import styles from './styles.module.css'; 

/* Utilizando o CSS MOdules, o nome dos atributos CSS é modificado passando IDs na frente, ajuda a não criar conflitos de css, é mais vantajoso */

export const Button = () => {
    return (
        <button className={styles.button}>Botão</button>
    )
}