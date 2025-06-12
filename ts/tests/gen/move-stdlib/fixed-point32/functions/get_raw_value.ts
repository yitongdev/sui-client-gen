import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `get_raw_value`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::fixed_point32`
 *
 * @param tx - The transaction object
 * @param num - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function getRawValue(tx: Transaction, num: TransactionObjectInput): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::fixed_point32::get_raw_value`,
    arguments: [obj(tx, num)],
  });
}
