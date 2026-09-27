export interface PostMutationDataReponse {
  success: boolean;
  message: string;
  data: PostMutationData;
}

export interface PostMutationData {
  post: Post;
}

export interface Post {
  image: string;
  privacy: string;
  user: string;
  sharedPost: any;
  likes: any[];
  _id: string;
  createdAt: string;
  likesCount: number;
  isShare: boolean;
  id: string;
}
