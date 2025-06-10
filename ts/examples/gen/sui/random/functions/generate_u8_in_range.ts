import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
} from "@mysten/sui/transactions";

export interface GenerateU8InRangeArgs {
  g: TransactionObjectInput;
  min: number | TransactionArgument;
  max: number | TransactionArgument;
}

/**
 * Move function: `generate_u8_in_range`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::random`
 *
 * @param tx - The transaction object
 * @param g - Function parameter
 * @param min - Function parameter
 * @param max - Function parameter
 */
export function generateU8InRange(
  tx: Transaction,
  args: GenerateU8InRangeArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::random::generate_u8_in_range`,
    arguments: [
      obj(tx, args.g),
      pure(tx, args.min, `u8`),
      pure(tx, args.max, `u8`),
    ],
  });
}
