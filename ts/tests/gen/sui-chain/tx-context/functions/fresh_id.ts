import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `fresh_id`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::tx_context`
 *
 * @param tx - The transaction object
 * @returns TransactionResult - The transaction result
 */
export function freshId(tx: Transaction): TransactionResult {
  return tx.moveCall({ target: `${PUBLISHED_AT}::tx_context::fresh_id`, arguments: [] });
}
