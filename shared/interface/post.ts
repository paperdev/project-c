interface iPost {
  id: number;
  title: string;
  time: string;
  tags: string[];
  urls: string[];
  likeCount: number;
  comments: string[];
};

interface iPostUpdateBody {
  likeCount: number | undefined;
  comment: string | undefined;
}

export {
  type iPost,
  type iPostUpdateBody,
}