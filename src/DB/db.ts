import Dexie, { type EntityTable } from "dexie";

interface Image {
    id: number;
    data: Blob;
}

const db = new Dexie("ImagesDatabase") as Dexie & {
    images: EntityTable<
        Image,
        'id'
    >;
};

db.version(1).stores({
    images: '++id, data'
});

export type { Image };
export { db };