export type SubjectType = {
    id: Number;
    name: String;
};

export const StudyStorage = {
    SUBJECTS_TABLE: "subjects"
}

export const DEFAULT_SUBJECTS = [
    {"id": 0, "name": "Desenvolvimento de Aplicações Distribuídas e Móveis", "content": []},
    {"id": 1, "name": "Projeto de Software", "content": []},
    {"id": 2, "name": "Estatística e Probabilidade", "content": []},
    {"id": 3, "name": "Gestão da Produção de Software", "content": []},
    {"id": 4, "name": "Trabalho Interdisciplinar: Aplicação Móvel", "content": []},
];