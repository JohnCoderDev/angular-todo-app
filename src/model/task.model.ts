export interface Task {
    id: number,
    content: string | undefined,
    isConcluded: boolean,
    dateCreation: Date,
    dateConcluded: Date | undefined,
}