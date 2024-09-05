import { BaseService } from "./BaseService";
import { ReadDto } from "../models/searchModel";
import { Post } from "../models/postModel";
import { useSession } from "next-auth/react";



export class PostService extends BaseService<ReadDto<Post>, Post> {
    constructor( ) {
        super(() => new Post() );

    }
} 

