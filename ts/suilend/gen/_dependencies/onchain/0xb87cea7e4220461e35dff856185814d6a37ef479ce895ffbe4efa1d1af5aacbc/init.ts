import * as sprungsui from "./sprungsui/structs/index.js";
import { StructClassLoader } from "../../../_framework/loader.js";

export function registerClasses(loader: StructClassLoader) {
  loader.register(sprungsui.SPRUNGSUI);
}
