import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface GenerateU32InRangeArgs {
  randomGenerator: TransactionObjectInput;
  u321: number | TransactionArgument;
  u322: number | TransactionArgument;
}

/**
 * Move function: `generate_u32_in_range`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::random`
 *
 * @param tx - The transaction object
 * @param randomGenerator - Function parameter
 * @param u321 - Function parameter
 * @param u322 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function generateU32InRange(
  tx: Transaction,
  args: GenerateU32InRangeArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::random::generate_u32_in_range`,
    arguments: [
      obj(tx, args.randomGenerator),
      pure(tx, args.u321, `u32`),
      pure(tx, args.u322, `u32`),
    ],
  });
}
