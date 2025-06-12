import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `get`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::cell`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param cell - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function get(
  tx: Transaction,
  typeArg: string,
  cell: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::cell::get`,
    typeArguments: [typeArg],
    arguments: [obj(tx, cell)],
  });
}
