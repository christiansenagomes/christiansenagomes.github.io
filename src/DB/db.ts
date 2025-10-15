import Dexie, { type EntityTable } from "dexie";

interface Image {
    id: number;
    subjectId: number;
    data: Blob;
    creationDate: Date;
}

interface TextPost {
    id: number;
    subjectId: number;
    data: string;
    creationDate: Date;
}

const db = new Dexie("ContentDatabase") as Dexie & {
    images: EntityTable<
        Image,
        'id'
    >;
    textContents: EntityTable<
        TextPost,
        'id'
    >;
};

db.version(1).stores({
    images: '++id, subjectId, creationDate',
    textContents: '++id, subjectId, data, creationDate',
});

export type { Image };
export { db };