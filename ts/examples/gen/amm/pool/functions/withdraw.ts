import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface WithdrawArgs {
  pool: TransactionObjectInput;
  lpIn: TransactionObjectInput;
  minAOut: bigint | TransactionArgument;
  minBOut: bigint | TransactionArgument;
}

/**
 * Move function: `withdraw`
 * Module: `f917eb03d02b9221b10276064b2c10296276cb43feb24aac35113a272dd691c7::pool`
 *
 * @typeParam A - Type parameter 0
 * @typeParam B - Type parameter 1
 * @param tx - The transaction object
 * @param pool - Function parameter
 * @param lpIn - Function parameter
 * @param minAOut - Function parameter
 * @param minBOut - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function withdraw(
  tx: Transaction,
  typeArgs: [string, string],
  args: WithdrawArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::pool::withdraw`,
    typeArguments: typeArgs,
    arguments: [
      obj(tx, args.pool),
      obj(tx, args.lpIn),
      pure(tx, args.minAOut, `u64`),
      pure(tx, args.minBOut, `u64`),
    ],
  });
}
