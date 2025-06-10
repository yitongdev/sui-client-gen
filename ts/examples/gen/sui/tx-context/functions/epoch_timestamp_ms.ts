import { PUBLISHED_AT } from "../../constants.js";
import { Transaction } from "@mysten/sui/transactions";

/**
 * Move function: `epoch_timestamp_ms`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::tx_context`
 *
 * @param tx - The transaction object
 * @param self - Function parameter
 */
export function epochTimestampMs(tx: Transaction) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::tx_context::epoch_timestamp_ms`,
    arguments: [],
  });
}
