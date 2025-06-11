import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `size`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::vec_set`
 *
 * @typeParam K - Type parameter 0
 * @param tx - The transaction object
 * @param self - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function size(
  tx: Transaction,
  typeArg: string,
  self: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::vec_set::size`,
    typeArguments: [typeArg],
    arguments: [obj(tx, self)],
  });
}
