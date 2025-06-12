import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `last_update_time_ms`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::liquidity_mining`
 *
 * @param tx - The transaction object
 * @param userRewardManager - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function lastUpdateTimeMs(
  tx: Transaction,
  userRewardManager: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::liquidity_mining::last_update_time_ms`,
    arguments: [obj(tx, userRewardManager)],
  });
}
