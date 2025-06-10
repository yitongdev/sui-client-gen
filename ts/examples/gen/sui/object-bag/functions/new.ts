import { PUBLISHED_AT } from "../../constants.js";
import { Transaction } from "@mysten/sui/transactions";

/**
 * Move function: `new`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::object_bag`
 *
 * @param tx - The transaction object
 * @param ctx - Function parameter
 */
export function new_(tx: Transaction) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::object_bag::new`,
    arguments: [],
  });
}
