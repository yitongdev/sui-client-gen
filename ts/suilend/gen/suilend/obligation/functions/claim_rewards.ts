import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface ClaimRewardsArgs {
  obligation: TransactionObjectInput;
  poolRewardManager: TransactionObjectInput;
  clock: TransactionObjectInput;
  u64: bigint | TransactionArgument;
}

/**
 * Move function: `claim_rewards`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::obligation`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @param tx - The transaction object
 * @param obligation - Function parameter
 * @param poolRewardManager - Function parameter
 * @param clock - Function parameter
 * @param u64 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function claimRewards(
  tx: Transaction,
  typeArgs: [string, string],
  args: ClaimRewardsArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::obligation::claim_rewards`,
    typeArguments: typeArgs,
    arguments: [
      obj(tx, args.obligation),
      obj(tx, args.poolRewardManager),
      obj(tx, args.clock),
      pure(tx, args.u64, `u64`),
    ],
  });
}
