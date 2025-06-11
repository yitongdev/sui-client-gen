import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface FindUserRewardManagerIndexArgs {
  obligation: TransactionObjectInput;
  poolRewardManager: TransactionObjectInput;
}

/**
 * Move function: `find_user_reward_manager_index`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::obligation`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param obligation - Function parameter
 * @param poolRewardManager - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function findUserRewardManagerIndex(
  tx: Transaction,
  typeArg: string,
  args: FindUserRewardManagerIndexArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::obligation::find_user_reward_manager_index`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.obligation), obj(tx, args.poolRewardManager)],
  });
}
