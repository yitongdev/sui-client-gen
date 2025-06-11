import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface GenerateU64InRangeArgs {
  randomGenerator: TransactionObjectInput;
  u641: bigint | TransactionArgument;
  u642: bigint | TransactionArgument;
}

/**
 * Move function: `generate_u64_in_range`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::random`
 *
 * @param tx - The transaction object
 * @param randomGenerator - Function parameter
 * @param u641 - Function parameter
 * @param u642 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function generateU64InRange(
  tx: Transaction,
  args: GenerateU64InRangeArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::random::generate_u64_in_range`,
    arguments: [
      obj(tx, args.randomGenerator),
      pure(tx, args.u641, `u64`),
      pure(tx, args.u642, `u64`),
    ],
  });
}
