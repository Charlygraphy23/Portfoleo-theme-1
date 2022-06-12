import { DocumentData } from "firebase/firestore";

export type RecentProjectsType = {
    description: string,
    images : string[]
}


export type TechnologyType = {
    info: DocumentData | null;
    techImages: DocumentData[];
}


export type CompanyInfoType = {
    name : string;
    description: string;
    logoUrl?: string;
    hireUsLink?: string
}