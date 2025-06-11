import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface GenerateU128InRangeArgs {
  randomGenerator: TransactionObjectInput;
  u1281: bigint | TransactionArgument;
  u1282: bigint | TransactionArgument;
}

/**
 * Move function: `generate_u128_in_range`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::random`
 *
 * @param tx - The transaction object
 * @param randomGenerator - Function parameter
 * @param u1281 - Function parameter
 * @param u1282 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function generateU128InRange(
  tx: Transaction,
  args: GenerateU128InRangeArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::random::generate_u128_in_range`,
    arguments: [
      obj(tx, args.randomGenerator),
      pure(tx, args.u1281, `u128`),
      pure(tx, args.u1282, `u128`),
    ],
  });
}
