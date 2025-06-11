import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `length`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::address`
 *
 * @param tx - The transaction object
 * @returns TransactionResult - The transaction result
 */
export function length(tx: Transaction): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::address::length`,
    arguments: [],
  });
}
