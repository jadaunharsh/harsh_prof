// blog.model.ts
export interface Blog {
    id: number;
    title: string;
    subtitle: string;
    author: string;
    content: string;
    image: string;
    date: string;
    // tags: string[];
    categoryName?: string;
}