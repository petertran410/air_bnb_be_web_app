import { CommentsService } from './comments.service';
import { CommentDTO } from './dto';
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    get(id: string, roomID: string, records: string, page: string): Promise<{
        message: string;
        data: Record<string, any>;
    }>;
    create(data: CommentDTO): Promise<{
        message: string;
        data: CommentDTO;
    }>;
    udpate(id: string, data: CommentDTO): Promise<{
        message: string;
        data: CommentDTO;
    }>;
    delete(id: string): Promise<{
        message: string;
    }>;
}
