import { useParams } from "react-router";
import type { SubjectType } from "../../constants";
import Container from "../../components/Container";
import styles from "../Subject/Subject.module.css";
import { useState } from "react";
import Post from "../../components/Post";

function createPost() {
    return;
}

export default function Subject() {
    const [selectedType, setSelectedType] = useState("text");

    const params = useParams();
    const subjectId: number = Number(params.id);

    let subjects: SubjectType[] = [];

    const unparsedSubjects: string | null = localStorage.getItem("subjects");
    if(unparsedSubjects) {
        subjects = JSON.parse(unparsedSubjects);
    }

    return (
        <Container style={{flexDirection: "column"}}>
            <div>
                <h1>{subjects[subjectId].name}</h1>
                <p>Você possui {subjects[subjectId].content?.length ?? "zero"} anotações</p>
                <p>[DEV]Current id: {params.id}</p>
            </div>

            <div className={styles.inputDiv}>
                <h3>Tipo de post:</h3>
                <div>
                    <input type="radio" id="textInputType" name="inputType" value="text"
                        checked={selectedType == "text"} onChange={(e) => setSelectedType(e.currentTarget.value)}/>
                    <label htmlFor="textInputType">Texto</label>
                </div>
                
                <div>
                    <input type="radio" id="imageInputType" name="inputType" value="image"
                        checked={selectedType == "image"} onChange={(e) => setSelectedType(e.currentTarget.value)}/>
                    <label htmlFor="imageInputType">Imagem</label>
                </div>
            </div>

            {selectedType == "image" ? 
                <div className={styles.inputDiv}>
                    {/* <label htmlFor="imageUpload">Inserir anexo:</label> */}
                    <input type="file" accept="image/*" id={styles.imageUpload} />
                </div> 
                :
                <div className={styles.inputDiv}>
                    <textarea name="" id={styles.textInput} rows={5}></textarea>
                </div>
            }
            
            <button className={styles.createBtn}>Criar</button>

            <section className={styles.postsSection}>
                <Post type="text" content="lorem ipsu dolor lorem ipsu dolor lorem ipsu dolor lorem ipsu dolor"/>
            </section>
        </Container>
    );
}