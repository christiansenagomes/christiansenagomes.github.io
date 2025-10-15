import { db } from "./db";

export async function getSubjectNotes(subjectId: number) {
    var images = await db.images.where('subjectId').equals(subjectId).toArray();

    var textContents = await db.textContents.where('subjectId').equals(subjectId).toArray();

    var notes = [
    ...images.map((img) => ({ ...img, type: 'image' as const })),
    ...textContents.map((txt) => ({ ...txt, type: 'text' as const}))
    ];

    notes.sort((a, b) => b.creationDate.getTime() - a.creationDate.getTime());

    return notes;
}
