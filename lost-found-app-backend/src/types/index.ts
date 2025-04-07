export interface Item {
    id: string;
    name: string;
    description: string;
    foundDate: Date;
    location: string;
    isFound: boolean;
}

export interface ItemInput {
    name: string;
    description: string;
    foundDate: Date;
    location: string;
    isFound: boolean;
}