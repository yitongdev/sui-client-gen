import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `sender`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::tx_context`
 *
 * @param tx - The transaction object
 * @param txContext - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function sender(tx: Transaction): TransactionResult {
  return tx.moveCall({ target: `${PUBLISHED_AT}::tx_context::sender`, arguments: [] });
}
