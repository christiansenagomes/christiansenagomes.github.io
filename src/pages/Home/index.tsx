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

    async function sendNotification() {
        if ('Notification' in window && navigator.serviceWorker) {
            const permission = await Notification.requestPermission();
            if (permission === 'granted') {
                const registration = await navigator.serviceWorker.ready;
                registration.showNotification('StudyNotes', {
                    body: 'Não esqueça de fazer anotações 😡',
                    icon: '/studynotes-192.png',
                    badge: '/studynotes-192.png',
                });
            }
        }
    }

    return (
        <>
            <Container>
                <button
                    style={{
                    backgroundColor: '#5390c2',
                    color: 'white',
                    padding: '10px',
                    border: 'none',
                    borderRadius: '5px',
                    margin: '10px',
                    cursor: "pointer"
                    }}
                    onClick={sendNotification}
                >
                    Notificação teste
                </button>
            </Container>
            <Container>
                {subjects.map(subject => (
                    <Card key={subject.id.toString()} id={subject.id.toString()} name={subject.name.toString()}/>
                ))}
            </Container>
        </>
    );
}