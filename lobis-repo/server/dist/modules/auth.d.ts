import { Response } from 'express';
type User = {
    id: string;
    username: string;
};
export declare const comparePasswords: (password: string, hash: string) => Promise<boolean>;
export declare const hashPassword: (password: string) => Promise<string>;
export declare const createJWT: (user: User) => string;
export declare const protect: (req: any, res: Response, next: any) => void;
export {};
