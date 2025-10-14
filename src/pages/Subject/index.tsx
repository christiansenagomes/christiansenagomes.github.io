import { useParams } from "react-router";
import type { SubjectType } from "../../constants";
import Container from "../../components/Container";

export default function Subject() {
    const params = useParams();
    const subjectId: number = Number(params.id);

    let subjects: SubjectType[] = [];

    const unparsedSubjects: string | null = localStorage.getItem("subjects");
    if(unparsedSubjects) {
        subjects = JSON.parse(unparsedSubjects);
    }

    return (
        <Container style={{flexDirection: "column"}}>
            Subject!
            <p>Current id: {params.id}</p>
            <p>Current Subject: {subjects[subjectId].name}</p>
        </Container>
    );
}