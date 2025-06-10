// This example demonstrates improved tree-shaking with individual file imports

// Old approach - imports everything from the module
// import { coin } from './gen';

// New approach - import only what you need
import { Coin } from "./gen/sui/coin/structs/Coin.js";
import { value } from "./gen/sui/coin/functions/value.js";

// Or you can still use the re-exports if you need multiple items
import { CoinMetadata, TreasuryCap } from "./gen/sui/coin/structs/index.js";

// Now bundlers can tree-shake unused structs and functions
console.log("Coin type:", Coin.$typeName);
console.log("Using specific imports for better tree-shaking!");
