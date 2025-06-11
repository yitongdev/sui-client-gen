import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface AddPoolRewardArgs {
  poolRewardManager: TransactionObjectInput;
  balance: TransactionObjectInput;
  u641: bigint | TransactionArgument;
  u642: bigint | TransactionArgument;
  clock: TransactionObjectInput;
}

/**
 * Move function: `add_pool_reward`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::liquidity_mining`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param poolRewardManager - Function parameter
 * @param balance - Function parameter
 * @param u641 - Function parameter
 * @param u642 - Function parameter
 * @param clock - Function parameter
 * @param txContext - Function parameter
 */
export function addPoolReward(
  tx: Transaction,
  typeArg: string,
  args: AddPoolRewardArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::liquidity_mining::add_pool_reward`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.poolRewardManager),
      obj(tx, args.balance),
      pure(tx, args.u641, `u64`),
      pure(tx, args.u642, `u64`),
      obj(tx, args.clock),
    ],
  });
}
