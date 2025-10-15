import { DEFAULT_SUBJECTS, StudyStorage, type ContentType, type SubjectType } from "../constants";

export function getSubjectsLS(): SubjectType[] {
    let subjects: SubjectType[] = [];
    const unparsedSubjects: string | null = localStorage.getItem("subjects");
    if(unparsedSubjects) {
        subjects = JSON.parse(unparsedSubjects);
    }
    return subjects;
}

function setContentLS(subjectId: number, newContents: ContentType[]) {
    let subjects = getSubjectsLS();
    for(let i = 0; i < subjects.length; i++) {
        if(subjects[i].id == subjectId) {
            subjects[i].content = newContents;
            localStorage.setItem(StudyStorage.SUBJECTS_TABLE, JSON.stringify(subjects));
            return true;
        }
    }
    return false;
}

export function addContentLS(subjectId: number, newContent: ContentType) {
    let subjects = getSubjectsLS();
    for(let i = 0; i < subjects.length; i++) {
        if(subjects[i].id == subjectId) {
            subjects[i].content.push(newContent);
            localStorage.setItem(StudyStorage.SUBJECTS_TABLE, JSON.stringify(subjects));
            return true;
        }
    }
    return false;
}
