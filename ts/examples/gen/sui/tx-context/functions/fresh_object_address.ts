import { PUBLISHED_AT } from "../../constants.js";
import { Transaction } from "@mysten/sui/transactions";

/**
 * Move function: `fresh_object_address`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::tx_context`
 *
 * @param tx - The transaction object
 * @param ctx - Function parameter
 */
export function freshObjectAddress(tx: Transaction) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::tx_context::fresh_object_address`,
    arguments: [],
  });
}
