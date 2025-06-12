import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `ids_created`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::tx_context`
 *
 * @param tx - The transaction object
 * @param self - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function idsCreated(tx: Transaction): TransactionResult {
  return tx.moveCall({ target: `${PUBLISHED_AT}::tx_context::ids_created`, arguments: [] });
}
