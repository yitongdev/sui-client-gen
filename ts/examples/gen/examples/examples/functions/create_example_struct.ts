import { PUBLISHED_AT } from "../../constants.js";
import { Transaction } from "@mysten/sui/transactions";

/**
 * Move function: `create_example_struct`
 * Module: `8b699fdce543505aeb290ee1b6b5d20fcaa8e8b1a5fc137a8b3facdfa2902209::examples`
 *
 * @param tx - The transaction object
 */
export function createExampleStruct(tx: Transaction) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::examples::create_example_struct`,
    arguments: [],
  });
}
