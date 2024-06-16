import { CommentDTO } from './dto';
export declare class CommentsService {
    private readonly prisma;
    findAll(roomID: number, records: number, page: number): Promise<CommentDTO[]>;
    findOne(id: number): Promise<CommentDTO>;
    create(data: CommentDTO): Promise<CommentDTO>;
    update(id: number, data: CommentDTO): Promise<CommentDTO>;
    delete(id: number): Promise<CommentDTO>;
}
