import { expectType } from "tsd";
import { Configurer, Userscript, type UserscriptOptionItem } from "../lib/configurer";
import "../lib/index";

const configurer = window.UserScripters?.Userscripts?.Configurer;

expectType<Configurer<any> | undefined>(configurer);

expectType<Promise<Configurer<any>>>(configurer!.render());

const userscript = configurer?.register("test-script");

expectType<Userscript<any> | undefined>(userscript);

const item: UserscriptOptionItem = {
    disabled: true,
    label: "Test Item",
    value: "test value"
};

expectType<Userscript<any>>(userscript!.option("test-option", {
    desc: "Option for tsd testing",
    def: "ok",
    disabledWhen: {
        option2: false,
    },
    items: [item],
    type: "text"
}));

expectType<Userscript<any>>(userscript!.options({
    option1: {
        desc: "Option for tsd testing",
        def: "ok",
        items: [item],
    }
}, {
    type: "text"
}));

expectType<Promise<string | undefined>>(userscript!.load("test-option"));
expectType<Promise<void>>(userscript!.save("test-option", "not ok"));
expectType<Promise<void>>(userscript!.remove("test-option"));
expectType<Promise<void>>(userscript!.clear());