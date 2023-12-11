export interface Construction {
    _id: string;
    name: string;
    description: string;
    direction: string;
    city: string,
    assignment_date: Date,
    deadline: Date,
    phone: string;
    construction_type: string;
    work_time: string;
    image: string,
    lat?: number;
    lng?: number;

}
