import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
} from "@mysten/sui/transactions";

export interface GenerateU32InRangeArgs {
  g: TransactionObjectInput;
  min: number | TransactionArgument;
  max: number | TransactionArgument;
}

/**
 * Move function: `generate_u32_in_range`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::random`
 *
 * @param tx - The transaction object
 * @param g - Function parameter
 * @param min - Function parameter
 * @param max - Function parameter
 */
export function generateU32InRange(
  tx: Transaction,
  args: GenerateU32InRangeArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::random::generate_u32_in_range`,
    arguments: [
      obj(tx, args.g),
      pure(tx, args.min, `u32`),
      pure(tx, args.max, `u32`),
    ],
  });
}
