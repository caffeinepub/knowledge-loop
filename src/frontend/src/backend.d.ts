import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Resource {
    title: string;
    description: string;
    seller: Principal;
    resourceType: ResourceType;
    price: bigint;
}
export interface UserProfile {
    branch: string;
    semester: bigint;
    name: string;
    year: bigint;
    email: string;
    college: string;
}
export enum ResourceType {
    video = "video",
    guide = "guide",
    notes = "notes"
}
export interface backendInterface {
    getAllResources(): Promise<Array<Resource>>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    getUserResources(user: Principal): Promise<Array<Resource>>;
    listResource(title: string, description: string, resourceType: ResourceType, price: bigint): Promise<void>;
    registerUser(name: string, college: string, branch: string, year: bigint, semester: bigint, email: string): Promise<void>;
}
