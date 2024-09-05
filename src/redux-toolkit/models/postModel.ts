export class Comment {
    text?: string;
    postId?: string;
    id?: string;
    createdById?: string;
    createdByName?: string;
}

export class  React {
    postId?: string;
    rectValue?: number;
    id?: string;
    createdByName?: string;
    createdById?: string;
}

export class Post {
    background?: string;
    content?: string;
    createdByName?: string;
    id?: string;
    dateTime?: string;
    comments?: Comment[];
    reacts?: React[];
    attachments?: string[];
    attachmentThumbnails?: string[];
}
