import { NavLink } from "react-router"

export default function Header() {
    return (
        <div style={{borderBottom: "solid 1px lightgray", padding: '20px', textAlign: 'center'}}>
            <NavLink to="/" style={{color: "#091119", textDecoration: "none"}}><h1>StudyNotes</h1></NavLink>
        </div>
    );
}