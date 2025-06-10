import { PUBLISHED_AT } from "../../constants.js";
import { Transaction } from "@mysten/sui/transactions";

/**
 * Move function: `additive_policy`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::package`
 *
 * @param tx - The transaction object
 */
export function additivePolicy(tx: Transaction) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::package::additive_policy`,
    arguments: [],
  });
}
