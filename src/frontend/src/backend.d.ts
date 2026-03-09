import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface JobApplication {
    id: bigint;
    name: string;
    email: string;
    message: string;
    timestamp: bigint;
    phone: string;
    position: string;
}
export interface ContactFormEntry {
    id: bigint;
    subject: string;
    name: string;
    email: string;
    message: string;
    timestamp: bigint;
    phone: string;
}
export interface backendInterface {
    getAllContactForms(): Promise<Array<ContactFormEntry>>;
    getAllJobApplications(): Promise<Array<JobApplication>>;
    submitContactForm(name: string, email: string, phone: string, subject: string, message: string): Promise<void>;
    submitJobApplication(name: string, email: string, phone: string, position: string, message: string): Promise<void>;
}
