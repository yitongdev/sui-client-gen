import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface NewUserRewardManagerArgs {
  poolRewardManager: TransactionObjectInput;
  clock: TransactionObjectInput;
}

/**
 * Move function: `new_user_reward_manager`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::liquidity_mining`
 *
 * @param tx - The transaction object
 * @param poolRewardManager - Function parameter
 * @param clock - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function newUserRewardManager(
  tx: Transaction,
  args: NewUserRewardManagerArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::liquidity_mining::new_user_reward_manager`,
    arguments: [obj(tx, args.poolRewardManager), obj(tx, args.clock)],
  });
}
