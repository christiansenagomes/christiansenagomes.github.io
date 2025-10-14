import type { JSX } from "react";
import styles from "./Post.module.css";

interface PostType {
    type: "image" | "text";
    content: string;
}

export default function Post({ type, content }: PostType) {
    let element: JSX.Element = <></>
    if(type == "image")
        element = <img src="content"></img>
    else
        element =  <p>{content}</p>

    return (
        <div className={styles.post}>
            <h3>Anotação</h3>
            {element}
        </div>
    );
}