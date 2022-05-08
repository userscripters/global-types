import Store, { type AsyncStorage } from "@userscripters/storage";

export declare class Userscript<T extends Storage | AsyncStorage> extends Store {
    option(key: string, desc: string, def?: unknown): Userscript<T>;
}

export declare class Configurer<T extends Storage | AsyncStorage> {
    hide(): Configurer<T>;
    register(name: string): Userscript<T>;
    render(): Configurer<T>;
    show(): Configurer<T>;
}
