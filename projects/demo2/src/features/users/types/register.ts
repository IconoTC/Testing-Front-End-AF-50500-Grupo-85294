export type Register = {
    username: string;
    email: string;
    password: string;
    isOkConditions: boolean,
    turn: 'M' | 'T' | 'N',
    course: 'A' | 'R' | 'N',
}
