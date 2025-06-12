import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `bn254`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::groth16`
 *
 * @param tx - The transaction object
 * @returns TransactionResult - The transaction result
 */
export function bn254(tx: Transaction): TransactionResult {
  return tx.moveCall({ target: `${PUBLISHED_AT}::groth16::bn254`, arguments: [] });
}
