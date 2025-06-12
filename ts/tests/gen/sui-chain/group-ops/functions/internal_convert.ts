import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

export interface InternalConvertArgs {
  u81: number | TransactionArgument;
  u82: number | TransactionArgument;
  vecU8: Array<number | TransactionArgument> | TransactionArgument;
}

/**
 * Move function: `internal_convert`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::group_ops`
 *
 * @param tx - The transaction object
 * @param u81 - Function parameter
 * @param u82 - Function parameter
 * @param vecU8 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function internalConvert(tx: Transaction, args: InternalConvertArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::group_ops::internal_convert`,
    arguments: [
      pure(tx, args.u81, `u8`),
      pure(tx, args.u82, `u8`),
      pure(tx, args.vecU8, `vector<u8>`),
    ],
  });
}
