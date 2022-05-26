
import { Configurer, Userscript, UserscriptOption, UserscriptToggleOption } from "./configurer";

declare global {
    interface Window {
        UserScripters?: {
            Helpers?: {
                API?: {},
                Scraping?: {},
                Stacks?: {};
            },
            Userscripts?: {
                Configurer?: Configurer<any>;
            };
        };

        Store?: typeof import("@userscripters/storage");
    }
}

export { AsyncStorage, default as Store } from "@userscripters/storage";
export { Configurer, Userscript, UserscriptOption, UserscriptToggleOption };


export as namespace UserScripters;
