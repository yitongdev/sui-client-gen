import { PUBLISHED_AT } from "../../constants.js";
import { Transaction } from "@mysten/sui/transactions";

/**
 * Move function: `max`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::address`
 *
 * @param tx - The transaction object
 */
export function max(tx: Transaction) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::address::max`,
    arguments: [],
  });
}
