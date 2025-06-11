import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `is_empty`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::table_vec`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param tableVec - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function isEmpty(
  tx: Transaction,
  typeArg: string,
  tableVec: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::table_vec::is_empty`,
    typeArguments: [typeArg],
    arguments: [obj(tx, tableVec)],
  });
}
