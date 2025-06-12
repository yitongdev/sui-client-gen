import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `timestamp_ms`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::clock`
 *
 * @param tx - The transaction object
 * @param clock - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function timestampMs(tx: Transaction, clock: TransactionObjectInput): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::clock::timestamp_ms`,
    arguments: [obj(tx, clock)],
  });
}
