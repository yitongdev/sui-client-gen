import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `is_zero`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::fixed_point32`
 *
 * @param tx - The transaction object
 * @param fixedPoint32 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function isZero(tx: Transaction, fixedPoint32: TransactionObjectInput): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::fixed_point32::is_zero`,
    arguments: [obj(tx, fixedPoint32)],
  });
}
