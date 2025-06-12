import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `bridge`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::object`
 *
 * @param tx - The transaction object
 * @returns TransactionResult - The transaction result
 */
export function bridge(tx: Transaction): TransactionResult {
  return tx.moveCall({ target: `${PUBLISHED_AT}::object::bridge`, arguments: [] });
}
