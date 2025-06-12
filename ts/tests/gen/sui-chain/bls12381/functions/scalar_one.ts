import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `scalar_one`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::bls12381`
 *
 * @param tx - The transaction object
 * @returns TransactionResult - The transaction result
 */
export function scalarOne(tx: Transaction): TransactionResult {
  return tx.moveCall({ target: `${PUBLISHED_AT}::bls12381::scalar_one`, arguments: [] });
}
