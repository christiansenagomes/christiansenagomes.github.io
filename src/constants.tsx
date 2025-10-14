export type SubjectType = {
    id: Number;
    name: String;
};

export const StudyStorage = {
    SUBJECTS_TABLE: "subjects"
}

export const DEFAULT_SUBJECTS = [
    {"id": 0, "name": "Desenvolvimento de Aplicações Distribuídas e Móveis"},
    {"id": 1, "name": "Projeto de Software"},
    {"id": 2, "name": "Estatística e Probabilidade"},
    {"id": 3, "name": "Gestão da Produção de Software"},
    {"id": 4, "name": "Trabalho Interdisciplinar: Aplicação Móvel"},
];