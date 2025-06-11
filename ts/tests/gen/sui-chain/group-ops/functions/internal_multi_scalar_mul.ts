import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface InternalMultiScalarMulArgs {
  u8: number | TransactionArgument;
  vecU81: Array<number | TransactionArgument> | TransactionArgument;
  vecU82: Array<number | TransactionArgument> | TransactionArgument;
}

/**
 * Move function: `internal_multi_scalar_mul`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::group_ops`
 *
 * @param tx - The transaction object
 * @param u8 - Function parameter
 * @param vecU81 - Function parameter
 * @param vecU82 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function internalMultiScalarMul(
  tx: Transaction,
  args: InternalMultiScalarMulArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::group_ops::internal_multi_scalar_mul`,
    arguments: [
      pure(tx, args.u8, `u8`),
      pure(tx, args.vecU81, `vector<u8>`),
      pure(tx, args.vecU82, `vector<u8>`),
    ],
  });
}
