export interface Construction {
    id: string;
    name: string;
    description: string;
    direction: string;
    city: string,
    assignment_date: string,
    deadline: string,
    phone: string;
    construction_type: string;
    work_time: string;
    image: string,
    lat?: number;
    lng?: number;
    workers?: [];
    reports?: [];

}
