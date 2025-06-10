import * as exampleCoin from "./example-coin/structs.js";
import * as examples from "./examples/structs.js";
import * as fixture from "./fixture/structs.js";
import * as otherModule from "./other-module/structs.js";
import { StructClassLoader } from "../_framework/loader.js";

export function registerClasses(loader: StructClassLoader) {
  loader.register(exampleCoin.EXAMPLE_COIN);
  loader.register(exampleCoin.Faucet);
  loader.register(examples.ExampleStruct);
  loader.register(examples.SpecialTypesStruct);
  loader.register(fixture.Dummy);
  loader.register(fixture.WithGenericField);
  loader.register(fixture.Bar);
  loader.register(fixture.WithTwoGenerics);
  loader.register(fixture.Foo);
  loader.register(fixture.WithSpecialTypes);
  loader.register(fixture.WithSpecialTypesAsGenerics);
  loader.register(fixture.WithSpecialTypesInVectors);
  loader.register(otherModule.StructFromOtherModule);
  loader.register(otherModule.AddedInAnUpgrade);
}
