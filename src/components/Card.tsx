import { NavLink } from "react-router";
import styles from './Card.Module.css';

type CardProps = {
    id: string;
    name: string;
}

export default function Card({ id, name }: CardProps) {
    return (
        <div className={styles.card}>
            <p className={styles.cardName}>{name}</p>
            <div className={styles.cardActionsDiv}>
                <NavLink to={`/subject/${id}`} className={styles.cardAccessAction}>
                    Acessar
                </NavLink>
                {/* <button className={styles.cardDeleteAction}>
                    Deletar
                </button> */}
            </div>
        </div>
    );
}