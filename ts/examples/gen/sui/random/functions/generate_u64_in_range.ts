import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
} from "@mysten/sui/transactions";

export interface GenerateU64InRangeArgs {
  g: TransactionObjectInput;
  min: bigint | TransactionArgument;
  max: bigint | TransactionArgument;
}

/**
 * Move function: `generate_u64_in_range`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::random`
 *
 * @param tx - The transaction object
 * @param g - Function parameter
 * @param min - Function parameter
 * @param max - Function parameter
 */
export function generateU64InRange(
  tx: Transaction,
  args: GenerateU64InRangeArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::random::generate_u64_in_range`,
    arguments: [
      obj(tx, args.g),
      pure(tx, args.min, `u64`),
      pure(tx, args.max, `u64`),
    ],
  });
}
