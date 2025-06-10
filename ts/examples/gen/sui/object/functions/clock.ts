import { PUBLISHED_AT } from "../../constants.js";
import { Transaction } from "@mysten/sui/transactions";

/**
 * Move function: `clock`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::object`
 *
 * @param tx - The transaction object
 */
export function clock(tx: Transaction) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::object::clock`,
    arguments: [],
  });
}
