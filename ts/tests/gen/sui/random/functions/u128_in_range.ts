import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface U128InRangeArgs {
  g: TransactionObjectInput;
  min: bigint | TransactionArgument;
  max: bigint | TransactionArgument;
  numOfBytes: number | TransactionArgument;
}

/**
 * Move function: `u128_in_range`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::random`
 *
 * @param tx - The transaction object
 * @param g - Function parameter
 * @param min - Function parameter
 * @param max - Function parameter
 * @param numOfBytes - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function u128InRange(
  tx: Transaction,
  args: U128InRangeArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::random::u128_in_range`,
    arguments: [
      obj(tx, args.g),
      pure(tx, args.min, `u128`),
      pure(tx, args.max, `u128`),
      pure(tx, args.numOfBytes, `u8`),
    ],
  });
}
