import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface CreateFromRationalArgs {
  u641: bigint | TransactionArgument;
  u642: bigint | TransactionArgument;
}

/**
 * Move function: `create_from_rational`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::fixed_point32`
 *
 * @param tx - The transaction object
 * @param u641 - Function parameter
 * @param u642 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function createFromRational(
  tx: Transaction,
  args: CreateFromRationalArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::fixed_point32::create_from_rational`,
    arguments: [pure(tx, args.u641, `u64`), pure(tx, args.u642, `u64`)],
  });
}
