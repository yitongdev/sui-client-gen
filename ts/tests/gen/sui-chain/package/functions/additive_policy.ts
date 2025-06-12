import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `additive_policy`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::package`
 *
 * @param tx - The transaction object
 * @returns TransactionResult - The transaction result
 */
export function additivePolicy(tx: Transaction): TransactionResult {
  return tx.moveCall({ target: `${PUBLISHED_AT}::package::additive_policy`, arguments: [] });
}
