import Store, { type AsyncStorage } from "@userscripters/storage";

export type UserscriptOptionType = "toggle" | "text" | "select" | "checkbox";

export interface UserscriptOptionItem {
    disabled?: boolean;
    id?: string;
    label: string;
    name?: string;
    selected?: boolean;
    value?: string;
}

export interface UserscriptOption {
    items?: UserscriptOptionItem[];
    name: string;
    desc: string;
    def?: unknown;
    title?: string;
    type: UserscriptOptionType;
}

export declare class Userscript<T extends Storage | AsyncStorage> extends Store {
    option(name: string, config: Omit<UserscriptOption, "name">): Userscript<T>;
    render(): Promise<HTMLElement>;
}

export declare class Configurer<T extends Storage | AsyncStorage> {
    hide(): Configurer<T>;
    register(name: string): Userscript<T>;
    render(): Promise<Configurer<T>>;
    show(): Configurer<T>;
    unregister(name: string): Userscript<T> | undefined;
}
