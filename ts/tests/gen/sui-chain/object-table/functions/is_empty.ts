import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `is_empty`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::object_table`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @param tx - The transaction object
 * @param objectTable - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function isEmpty(
  tx: Transaction,
  typeArgs: [string, string],
  objectTable: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::object_table::is_empty`,
    typeArguments: typeArgs,
    arguments: [obj(tx, objectTable)],
  });
}
