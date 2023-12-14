export interface Task {
    id: string;
    title: string;
    description: string;
    deadline: string;
    assignment_date: string;
    priority: string,
    Constructions_id?: number,
    users_id?: number,
}
