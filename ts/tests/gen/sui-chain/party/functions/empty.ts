import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `empty`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::party`
 *
 * @param tx - The transaction object
 * @returns TransactionResult - The transaction result
 */
export function empty(tx: Transaction): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::party::empty`,
    arguments: [],
  });
}
