import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `into_string`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::type_name`
 *
 * @param tx - The transaction object
 * @param typeName - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function intoString(tx: Transaction, typeName: TransactionObjectInput): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::type_name::into_string`,
    arguments: [obj(tx, typeName)],
  });
}
