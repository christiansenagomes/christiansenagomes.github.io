import { NavLink } from "react-router";

type CardProps = {
    color: string;
    borderColor: string;
}

export default function Card({ color, borderColor }: CardProps) {
    return (
        <div style={{display: "flex", flexDirection: "column", backgroundColor: color, border: `solid 10px ${borderColor}`, borderWidth: "10px 10px 0 10px", flex: "1", padding: "20px", margin: "10px", borderRadius: "5px"}}>
            <p style={{color: "#3c3c3c", fontWeight: "bold"}}>Nome</p>
            <div style={{marginTop: "50px", display: "flex", justifyContent: "space-between", gap:"10px"}}>
                <NavLink to="/subject/4" style={{flex: 1, padding: "10px 25px", border: "solid 2px green", borderRadius: "3px", backgroundColor: "green", color: "#fcfcfc", cursor: "pointer"}}>
                    Acessar
                </NavLink>
                <button style={{flex:1, padding: "10px 25px", border:"solid 2px darkred", borderRadius: "3px", backgroundColor: "darkred", color: "#bbbbbb", cursor: "pointer"}}>
                    Deletar
                </button>
            </div>
        </div>
    );
}