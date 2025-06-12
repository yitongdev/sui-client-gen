import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `max`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::address`
 *
 * @param tx - The transaction object
 * @returns TransactionResult - The transaction result
 */
export function max(tx: Transaction): TransactionResult {
  return tx.moveCall({ target: `${PUBLISHED_AT}::address::max`, arguments: [] });
}
