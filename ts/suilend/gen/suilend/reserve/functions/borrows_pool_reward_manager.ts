import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `borrows_pool_reward_manager`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::reserve`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param reserve - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function borrowsPoolRewardManager(
  tx: Transaction,
  typeArg: string,
  reserve: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::reserve::borrows_pool_reward_manager`,
    typeArguments: [typeArg],
    arguments: [obj(tx, reserve)],
  });
}
