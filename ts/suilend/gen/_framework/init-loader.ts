import * as package_onchain_1 from "../_dependencies/onchain/0x1/init.js";
import * as package_onchain_2 from "../_dependencies/onchain/0x2/init.js";
import * as package_onchain_3 from "../_dependencies/onchain/0x3/init.js";
import * as package_onchain_5306f64e312b581766351c07af79c72fcb1cd25147157fdc2f8ad76de9a3fb6a from "../_dependencies/onchain/0x5306f64e312b581766351c07af79c72fcb1cd25147157fdc2f8ad76de9a3fb6a/init.js";
import * as package_onchain_8d97f1cd6ac663735be08d1d2b6d02a159e711586461306ce60a2b7a6a565a9e from "../_dependencies/onchain/0x8d97f1cd6ac663735be08d1d2b6d02a159e711586461306ce60a2b7a6a565a9e/init.js";
import * as package_onchain_b87cea7e4220461e35dff856185814d6a37ef479ce895ffbe4efa1d1af5aacbc from "../_dependencies/onchain/0xb87cea7e4220461e35dff856185814d6a37ef479ce895ffbe4efa1d1af5aacbc/init.js";
import * as package_onchain_b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7 from "../springsui/init.js";
import * as package_onchain_f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf from "../suilend/init.js";
import { StructClassLoader } from "./loader.js";

function registerClassesOnchain(loader: StructClassLoader) {
  package_onchain_1.registerClasses(loader);
  package_onchain_2.registerClasses(loader);
  package_onchain_3.registerClasses(loader);
  package_onchain_5306f64e312b581766351c07af79c72fcb1cd25147157fdc2f8ad76de9a3fb6a.registerClasses(
    loader,
  );
  package_onchain_8d97f1cd6ac663735be08d1d2b6d02a159e711586461306ce60a2b7a6a565a9e.registerClasses(
    loader,
  );
  package_onchain_b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7.registerClasses(
    loader,
  );
  package_onchain_b87cea7e4220461e35dff856185814d6a37ef479ce895ffbe4efa1d1af5aacbc.registerClasses(
    loader,
  );
  package_onchain_f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf.registerClasses(
    loader,
  );
}

export function registerClasses(loader: StructClassLoader) {
  registerClassesOnchain(loader);
}
