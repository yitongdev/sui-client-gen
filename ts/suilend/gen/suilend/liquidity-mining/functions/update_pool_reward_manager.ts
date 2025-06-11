import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface UpdatePoolRewardManagerArgs {
  poolRewardManager: TransactionObjectInput;
  clock: TransactionObjectInput;
}

/**
 * Move function: `update_pool_reward_manager`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::liquidity_mining`
 *
 * @param tx - The transaction object
 * @param poolRewardManager - Function parameter
 * @param clock - Function parameter
 */
export function updatePoolRewardManager(
  tx: Transaction,
  args: UpdatePoolRewardManagerArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::liquidity_mining::update_pool_reward_manager`,
    arguments: [obj(tx, args.poolRewardManager), obj(tx, args.clock)],
  });
}
