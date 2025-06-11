import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `new`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::sui`
 *
 * @param tx - The transaction object
 * @param ctx - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function new_(tx: Transaction): TransactionResult {
  return tx.moveCall({ target: `${PUBLISHED_AT}::sui::new`, arguments: [] });
}
