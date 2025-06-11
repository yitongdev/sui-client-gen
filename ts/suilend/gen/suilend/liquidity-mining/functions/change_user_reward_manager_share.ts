import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface ChangeUserRewardManagerShareArgs {
  poolRewardManager: TransactionObjectInput;
  userRewardManager: TransactionObjectInput;
  u64: bigint | TransactionArgument;
  clock: TransactionObjectInput;
}

/**
 * Move function: `change_user_reward_manager_share`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::liquidity_mining`
 *
 * @param tx - The transaction object
 * @param poolRewardManager - Function parameter
 * @param userRewardManager - Function parameter
 * @param u64 - Function parameter
 * @param clock - Function parameter
 */
export function changeUserRewardManagerShare(
  tx: Transaction,
  args: ChangeUserRewardManagerShareArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::liquidity_mining::change_user_reward_manager_share`,
    arguments: [
      obj(tx, args.poolRewardManager),
      obj(tx, args.userRewardManager),
      pure(tx, args.u64, `u64`),
      obj(tx, args.clock),
    ],
  });
}
