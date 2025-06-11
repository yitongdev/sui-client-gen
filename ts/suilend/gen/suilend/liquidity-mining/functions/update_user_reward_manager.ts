import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface UpdateUserRewardManagerArgs {
  poolRewardManager: TransactionObjectInput;
  userRewardManager: TransactionObjectInput;
  clock: TransactionObjectInput;
  bool: boolean | TransactionArgument;
}

/**
 * Move function: `update_user_reward_manager`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::liquidity_mining`
 *
 * @param tx - The transaction object
 * @param poolRewardManager - Function parameter
 * @param userRewardManager - Function parameter
 * @param clock - Function parameter
 * @param bool - Function parameter
 */
export function updateUserRewardManager(
  tx: Transaction,
  args: UpdateUserRewardManagerArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::liquidity_mining::update_user_reward_manager`,
    arguments: [
      obj(tx, args.poolRewardManager),
      obj(tx, args.userRewardManager),
      obj(tx, args.clock),
      pure(tx, args.bool, `bool`),
    ],
  });
}
