import { PUBLISHED_AT } from "../../constants.js";
import { Transaction } from "@mysten/sui/transactions";

/**
 * Move function: `compatible_policy`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::package`
 *
 * @param tx - The transaction object
 */
export function compatiblePolicy(tx: Transaction) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::package::compatible_policy`,
    arguments: [],
  });
}
