export declare class CommentDTO {
    id?: number;
    room_id: number;
    created_by_id: number;
    date: Date;
    content: string;
    rated: number;
}
export declare class CommentUpdateDTO extends CommentDTO {
    room_id: number;
    created_by_id: number;
    date: Date;
    content: string;
    rated: number;
}
