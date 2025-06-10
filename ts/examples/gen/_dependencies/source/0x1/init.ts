import * as ascii from "./ascii/structs.js";
import * as bitVector from "./bit-vector/structs.js";
import * as fixedPoint32 from "./fixed-point32/structs.js";
import * as option from "./option/structs.js";
import * as string from "./string/structs.js";
import * as typeName from "./type-name/structs.js";
import { StructClassLoader } from "../../../_framework/loader.js";

export function registerClasses(loader: StructClassLoader) {
  loader.register(ascii.String);
  loader.register(ascii.Char);
  loader.register(bitVector.BitVector);
  loader.register(fixedPoint32.FixedPoint32);
  loader.register(option.Option);
  loader.register(string.String);
  loader.register(typeName.TypeName);
}
