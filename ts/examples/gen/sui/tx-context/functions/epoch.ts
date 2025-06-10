import { PUBLISHED_AT } from "../../constants.js";
import { Transaction } from "@mysten/sui/transactions";

/**
 * Move function: `epoch`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::tx_context`
 *
 * @param tx - The transaction object
 * @param self - Function parameter
 */
export function epoch(tx: Transaction) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::tx_context::epoch`,
    arguments: [],
  });
}
