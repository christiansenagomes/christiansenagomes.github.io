import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Container from "../../components/Container";
import { DEFAULT_SUBJECTS, StudyStorage, type SubjectType } from "../../constants";

let subjects: SubjectType[] = [];
const unparsedSubjects: string | null = localStorage.getItem("subjects");
if(unparsedSubjects) {
    subjects = JSON.parse(unparsedSubjects);
}
if(subjects.length == 0) {
    localStorage.setItem(StudyStorage.SUBJECTS_TABLE, JSON.stringify(DEFAULT_SUBJECTS));
}

export default function Home() {
    const [subjects, setSubjects] = useState<SubjectType[]>([]);

    useEffect(() => {
        const unparsedSubjects: string | null = localStorage.getItem("subjects");
        if(unparsedSubjects) {
            setSubjects(JSON.parse(unparsedSubjects));
        }
        if(subjects.length == 0) {
            localStorage.setItem(StudyStorage.SUBJECTS_TABLE, JSON.stringify(DEFAULT_SUBJECTS));
            setSubjects(DEFAULT_SUBJECTS)
        }
    }, []);

    return (
        <Container>
            {subjects.map(subject => (
                <Card key={subject.id.toString()} id={subject.id.toString()} name={subject.name.toString()}/>
            ))}
        </Container>
    );
}