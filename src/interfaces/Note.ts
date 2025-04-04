export interface Note {
    id: string;
    title: string;
    description: string;
    tags?: string[];
    archived: boolean;
    createdAt?: string;
    updatedAt?: string;
}  