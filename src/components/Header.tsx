import { NavLink } from "react-router"

export default function Header() {
    const isInStandaloneMode = () =>
      (window.matchMedia('(display-mode: standalone)').matches)  || document.referrer.includes('android-app://');

    return (
        <div style={{borderBottom: "solid 1px lightgray", padding: '20px', textAlign: 'center'}}>
            <NavLink to="/" style={{color: "#091119", textDecoration: "none"}}><h1>StudyNotes</h1></NavLink>
            {isInStandaloneMode() ?
            <p style={{color: "green", fontWeight: "bold", fontSize: "larger"}}>Modo App</p> :
            // <button style={
            // {
            //     backgroundColor: "green",
            //     color: "white",
            //     fontWeight: "bold",
            //     padding: "10px",
            //     border: "none",
            //     borderRadius: "5px",
            //     cursor: "pointer"
            // }
            // onClick={() }
            // >
            //     Instalar App
            // </button>
            <p style={{color: "red", fontWeight: "bold", fontSize: "larger"}}>Modo Navegador</p>
            }
        </div>
    );
}