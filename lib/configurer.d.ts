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

export interface UserscriptOptionConfig {
    items?: UserscriptOptionItem[];
    desc: string;
    def?: unknown;
    disabledWhen?: Record<string, unknown>;
    title?: string;
    type: UserscriptOptionType;
}

export interface UserscriptToggleOption extends UserscriptOptionConfig {
    direction?: "left" | "right";
}

export type UserscriptOptionConfigRecord<
    U extends Record<string, UserscriptOptionConfig>,
    V extends Partial<UserscriptOptionConfig>
    > = { [P in keyof U]: Omit<U[P], keyof V> & { [R in Extract<keyof V, keyof U[P]>]?: U[P][R] } };

export declare class UserscriptOption<
    T extends Storage | AsyncStorage,
    U extends UserScripters.UserscriptOptionConfig,
    > {
    container?: HTMLElement;
    name: string;
    render(): Promise<HTMLElement>;
    shouldDisable(): Promise<boolean>;
}

export declare class Userscript<T extends Storage | AsyncStorage> extends Store {
    get<U extends UserscriptOptionConfig>(name: string): UserscriptOption<T, U> | undefined;
    option<U extends UserscriptOptionConfig>(name: string, config: U): Userscript<T>;
    options<U extends Record<string, UserscriptOptionConfig>>(configs: U): Userscript<T>;
    options<
        U extends Record<string, UserscriptOptionConfig>,
        V extends Partial<UserscriptOptionConfig>
        >(configs: UserscriptOptionConfigRecord<U, V>, common: V): Userscript<T>;
    render(): Promise<HTMLElement>;
}

export declare class Configurer<T extends Storage | AsyncStorage> {
    get(name: string): Userscript<T> | undefined;
    hide(): Configurer<T>;
    register(name: string, storage?: T): Userscript<T>;
    render(): Promise<Configurer<T>>;
    show(): Configurer<T>;
    unregister(name: string): Userscript<T> | undefined;
}
