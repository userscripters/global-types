import { expectType } from "tsd";
import { Userscript, type Configurer } from "../lib/configurer";
import "../lib/index";

const configurer = window.UserScripters?.Userscripts?.Configurer;

expectType<Configurer<any> | undefined>(configurer);

const userscript = configurer?.register("test-script");

expectType<Userscript<any> | undefined>(userscript);

expectType<Userscript<any>>(userscript!.option("test-option", "Option for tsd testing", "ok"));

expectType<Promise<string | undefined>>(userscript!.load("test-option"));
expectType<Promise<void>>(userscript!.save("test-option", "not ok"));
expectType<Promise<void>>(userscript!.remove("test-option"));
expectType<Promise<void>>(userscript!.clear());