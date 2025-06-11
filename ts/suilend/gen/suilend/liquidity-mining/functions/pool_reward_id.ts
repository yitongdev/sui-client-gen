import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface PoolRewardIdArgs {
  poolRewardManager: TransactionObjectInput;
  u64: bigint | TransactionArgument;
}

/**
 * Move function: `pool_reward_id`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::liquidity_mining`
 *
 * @param tx - The transaction object
 * @param poolRewardManager - Function parameter
 * @param u64 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function poolRewardId(
  tx: Transaction,
  args: PoolRewardIdArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::liquidity_mining::pool_reward_id`,
    arguments: [obj(tx, args.poolRewardManager), pure(tx, args.u64, `u64`)],
  });
}
