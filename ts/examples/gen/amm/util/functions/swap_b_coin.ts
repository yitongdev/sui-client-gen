import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface SwapBCoinArgs {
  pool: TransactionObjectInput;
  input: TransactionObjectInput;
  minOut: bigint | TransactionArgument;
}

/**
 * Move function: `swap_b_coin`
 * Module: `f917eb03d02b9221b10276064b2c10296276cb43feb24aac35113a272dd691c7::util`
 *
 * @typeParam A - Type parameter 0
 * @typeParam B - Type parameter 1
 * @param tx - The transaction object
 * @param pool - Function parameter
 * @param input - Function parameter
 * @param minOut - Function parameter
 * @param ctx - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function swapBCoin(
  tx: Transaction,
  typeArgs: [string, string],
  args: SwapBCoinArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::util::swap_b_coin`,
    typeArguments: typeArgs,
    arguments: [obj(tx, args.pool), obj(tx, args.input), pure(tx, args.minOut, `u64`)],
  });
}
