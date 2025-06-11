import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface InternalSumArgs {
  u8: number | TransactionArgument;
  vecVecU8:
    | Array<Array<number | TransactionArgument> | TransactionArgument>
    | TransactionArgument;
}

/**
 * Move function: `internal_sum`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::group_ops`
 *
 * @param tx - The transaction object
 * @param u8 - Function parameter
 * @param vecVecU8 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function internalSum(
  tx: Transaction,
  args: InternalSumArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::group_ops::internal_sum`,
    arguments: [
      pure(tx, args.u8, `u8`),
      pure(tx, args.vecVecU8, `vector<vector<u8>>`),
    ],
  });
}
