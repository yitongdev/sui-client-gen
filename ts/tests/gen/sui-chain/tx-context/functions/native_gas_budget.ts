import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `native_gas_budget`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::tx_context`
 *
 * @param tx - The transaction object
 * @returns TransactionResult - The transaction result
 */
export function nativeGasBudget(tx: Transaction): TransactionResult {
  return tx.moveCall({ target: `${PUBLISHED_AT}::tx_context::native_gas_budget`, arguments: [] });
}
