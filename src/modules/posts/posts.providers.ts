import { POST_REPOSITORY } from "src/core/constants";
import { Post } from "./post.entity";

export const postsProviders = [{
    provide: POST_REPOSITORY,
    useValue: Post
}]
