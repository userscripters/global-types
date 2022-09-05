
import { Configurer, Userscript, UserscriptOptionConfig, UserscriptOptionConfigRecord, UserscriptToggleOption } from "./configurer";

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

    interface ConfigurerChangeEvent extends CustomEvent {
        detail: {
            name: string;
            oldValue: unknown;
            script: string;
            value: string | boolean | string[];
        };
    }

    interface ConfigurerLoadEvent extends CustomEvent { }

    interface GlobalEventHandlersEventMap {
        "userscript-configurer-change": ConfigurerChangeEvent;
        "userscript-configurer-load": ConfigurerLoadEvent;
    }
}

export { AsyncStorage, default as Store } from "@userscripters/storage";
export { Configurer, Userscript, UserscriptToggleOption, UserscriptOptionConfig, UserscriptOptionConfigRecord };

export as namespace UserScripters;
