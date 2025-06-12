import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

export interface InternalMultiScalarMulArgs {
  type: number | TransactionArgument;
  scalars: Array<number | TransactionArgument> | TransactionArgument;
  elements: Array<number | TransactionArgument> | TransactionArgument;
}

/**
 * Move function: `internal_multi_scalar_mul`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::group_ops`
 *
 * @param tx - The transaction object
 * @param type - Function parameter
 * @param scalars - Function parameter
 * @param elements - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function internalMultiScalarMul(
  tx: Transaction,
  args: InternalMultiScalarMulArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::group_ops::internal_multi_scalar_mul`,
    arguments: [
      pure(tx, args.type, `u8`),
      pure(tx, args.scalars, `vector<u8>`),
      pure(tx, args.elements, `vector<u8>`),
    ],
  });
}
