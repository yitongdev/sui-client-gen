import { PUBLISHED_AT } from "../../constants.js";
import { Transaction } from "@mysten/sui/transactions";

/**
 * Move function: `bridge`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::object`
 *
 * @param tx - The transaction object
 */
export function bridge(tx: Transaction) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::object::bridge`,
    arguments: [],
  });
}
