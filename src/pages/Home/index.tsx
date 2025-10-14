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
    return (
        <Container>
            {subjects.map(subject => (
                <Card color="#3c3c3c" borderColor="black"/>
            ))}
            {/* <Card borderColor="#ffaaff" color="#ffddff"/>
            <Card borderColor="#aaffff" color="#ddffff"/>
            <Card borderColor="#ffffaa" color="#ffffdd"/>
            <Card borderColor="#aa0000" color="#dd0000"/>
            <Card borderColor="#00aa00" color="#00dd00"/> */}
        </Container>
    );
}