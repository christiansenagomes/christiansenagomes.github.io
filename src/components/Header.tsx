import { NavLink } from "react-router"

export default function Header() {
    return (
        <div style={{border: "solid 1px lightgray", padding: '20px', textAlign: 'center'}}>
            <NavLink to="/" style={{color: "black"}}><h1>StudyNotes</h1></NavLink>
        </div>
    );
}