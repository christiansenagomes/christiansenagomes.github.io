import { useParams } from "react-router";
import { useEffect, useState } from "react";

import type { SubjectType } from "../../constants";
import Container from "../../components/Container";
import styles from "../Subject/Subject.module.css";
import Post from "../../components/Post";

import { db } from "../../DB/db";

async function imagePost(data: File) {
    return;
}

async function textPost(data: string) {
    console.log(data);
    return;
}

export default function Subject() {
    const [selectedType, setSelectedType] = useState("text");
    const [textData, setTextData] = useState<string>();
    const [imageData, setImageData] = useState<File>();

    useEffect(() => {
        setTextData(undefined);
        setImageData(undefined);
    }, [ selectedType ])

    function handleCreate() {
        if(selectedType == "image" && imageData) {
            imagePost(imageData);
        } else if(selectedType == "text" && textData) {
            textPost(textData);
        }
    }

    function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
        if(e.target.files && e.target.files.length > 0) {
            setImageData(e.target.files[0]);
        } else {
            setImageData(undefined);
        }
    }

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
                {/* <p>[DEV]Current id: {params.id}</p> */}
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
                    <input type="file" accept="image/*" id={styles.imageUpload} onChange={handleImageChange} />
                </div> 
                :
                <div className={styles.inputDiv}>
                    <textarea name="" id={styles.textInput} rows={5} onChange={(e) => setTextData(e.target.value)}></textarea>
                </div>
            }
            
            <button className={styles.createBtn} onClick={handleCreate}>Criar</button>

            <section className={styles.postsSection}>
                <Post type="text" content="lorem ipsu dolor lorem ipsu dolor lorem ipsu dolor lorem ipsu dolor"/>
            </section>
        </Container>
    );
}