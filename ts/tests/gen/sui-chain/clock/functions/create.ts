import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `create`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::clock`
 *
 * @param tx - The transaction object
 * @param txContext - Function parameter
 */
export function create(tx: Transaction): TransactionResult {
  return tx.moveCall({ target: `${PUBLISHED_AT}::clock::create`, arguments: [] });
}
