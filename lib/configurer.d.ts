import Store, { type AsyncStorage } from "@userscripters/storage";

export interface UserscriptOption {
    name: string;
    desc: string;
    def?: unknown;
    type: UserscriptOptionType;
};

export declare class Userscript<T extends Storage | AsyncStorage> extends Store {
    option(name: string, config: Omit<UserscriptOption, "name">): Userscript<T>;
}

export declare class Configurer<T extends Storage | AsyncStorage> {
    hide(): Configurer<T>;
    register(name: string): Userscript<T>;
    render(): Configurer<T>;
    show(): Configurer<T>;
    unregister(name: string): Userscript<T> | undefined;
}
