import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface GenerateU16InRangeArgs {
  randomGenerator: TransactionObjectInput;
  u161: number | TransactionArgument;
  u162: number | TransactionArgument;
}

/**
 * Move function: `generate_u16_in_range`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::random`
 *
 * @param tx - The transaction object
 * @param randomGenerator - Function parameter
 * @param u161 - Function parameter
 * @param u162 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function generateU16InRange(
  tx: Transaction,
  args: GenerateU16InRangeArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::random::generate_u16_in_range`,
    arguments: [
      obj(tx, args.randomGenerator),
      pure(tx, args.u161, `u16`),
      pure(tx, args.u162, `u16`),
    ],
  });
}
