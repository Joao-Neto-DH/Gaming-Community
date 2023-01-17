type Game = {
    url: string;
    comments_url: string;
    like_url: string;
    title: string;
    description: string;
    yearSold: number;
    id: string;
    updatedAt: Date;
    _count: {
        comments: number;
        likes: number;
    };
    genre: string[]
}

export type { Game }