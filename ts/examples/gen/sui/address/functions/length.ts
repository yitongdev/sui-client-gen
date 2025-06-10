import { PUBLISHED_AT } from "../../constants.js";
import { Transaction } from "@mysten/sui/transactions";

/**
 * Move function: `length`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::address`
 *
 * @param tx - The transaction object
 */
export function length(tx: Transaction) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::address::length`,
    arguments: [],
  });
}
