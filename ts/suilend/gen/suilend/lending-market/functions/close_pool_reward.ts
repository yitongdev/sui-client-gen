import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface ClosePoolRewardArgs {
  lendingMarketOwnerCap: TransactionObjectInput;
  lendingMarket: TransactionObjectInput;
  u641: bigint | TransactionArgument;
  bool: boolean | TransactionArgument;
  u642: bigint | TransactionArgument;
  clock: TransactionObjectInput;
}

/**
 * Move function: `close_pool_reward`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::lending_market`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @param tx - The transaction object
 * @param lendingMarketOwnerCap - Function parameter
 * @param lendingMarket - Function parameter
 * @param u641 - Function parameter
 * @param bool - Function parameter
 * @param u642 - Function parameter
 * @param clock - Function parameter
 * @param txContext - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function closePoolReward(
  tx: Transaction,
  typeArgs: [string, string],
  args: ClosePoolRewardArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::lending_market::close_pool_reward`,
    typeArguments: typeArgs,
    arguments: [
      obj(tx, args.lendingMarketOwnerCap),
      obj(tx, args.lendingMarket),
      pure(tx, args.u641, `u64`),
      pure(tx, args.bool, `bool`),
      pure(tx, args.u642, `u64`),
      obj(tx, args.clock),
    ],
  });
}
