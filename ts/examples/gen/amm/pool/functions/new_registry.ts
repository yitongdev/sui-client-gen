import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `new_registry`
 * Module: `f917eb03d02b9221b10276064b2c10296276cb43feb24aac35113a272dd691c7::pool`
 *
 * @param tx - The transaction object
 * @param ctx - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function newRegistry(tx: Transaction): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::pool::new_registry`,
    arguments: [],
  });
}
