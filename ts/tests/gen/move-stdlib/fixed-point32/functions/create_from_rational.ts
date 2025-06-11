import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface CreateFromRationalArgs {
  numerator: bigint | TransactionArgument;
  denominator: bigint | TransactionArgument;
}

/**
 * Move function: `create_from_rational`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::fixed_point32`
 *
 * @param tx - The transaction object
 * @param numerator - Function parameter
 * @param denominator - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function createFromRational(
  tx: Transaction,
  args: CreateFromRationalArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::fixed_point32::create_from_rational`,
    arguments: [
      pure(tx, args.numerator, `u64`),
      pure(tx, args.denominator, `u64`),
    ],
  });
}
