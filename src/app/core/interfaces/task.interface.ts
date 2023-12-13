export interface Task {
    id: string;
    title: string;
    description: string;
    deadline: Date;
    assignment_date: Date;
    priority: string,
    Constructions_id?: number,
    Constructions_users_id?: number,
    users_id?: number,
}
