import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
} from "@mysten/sui/transactions";

export interface SwapAArgs {
  pool: TransactionObjectInput;
  input: TransactionObjectInput;
  minOut: bigint | TransactionArgument;
}

/**
 * Move function: `swap_a`
 * Module: `f917eb03d02b9221b10276064b2c10296276cb43feb24aac35113a272dd691c7::pool`
 *
 * @typeParam A - Type parameter 0
 * @typeParam B - Type parameter 1
 * @param tx - The transaction object
 * @param pool - Function parameter
 * @param input - Function parameter
 * @param minOut - Function parameter
 */
export function swapA(
  tx: Transaction,
  typeArgs: [string, string],
  args: SwapAArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::pool::swap_a`,
    typeArguments: typeArgs,
    arguments: [
      obj(tx, args.pool),
      obj(tx, args.input),
      pure(tx, args.minOut, `u64`),
    ],
  });
}
