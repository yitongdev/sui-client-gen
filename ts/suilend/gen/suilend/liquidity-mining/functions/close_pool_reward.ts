import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface ClosePoolRewardArgs {
  poolRewardManager: TransactionObjectInput;
  u64: bigint | TransactionArgument;
  clock: TransactionObjectInput;
}

/**
 * Move function: `close_pool_reward`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::liquidity_mining`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param poolRewardManager - Function parameter
 * @param u64 - Function parameter
 * @param clock - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function closePoolReward(
  tx: Transaction,
  typeArg: string,
  args: ClosePoolRewardArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::liquidity_mining::close_pool_reward`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.poolRewardManager),
      pure(tx, args.u64, `u64`),
      obj(tx, args.clock),
    ],
  });
}
