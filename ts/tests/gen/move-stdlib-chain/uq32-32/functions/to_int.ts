import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `to_int`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::uq32_32`
 *
 * @param tx - The transaction object
 * @param uq3232 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function toInt(tx: Transaction, uq3232: TransactionObjectInput): TransactionResult {
  return tx.moveCall({ target: `${PUBLISHED_AT}::uq32_32::to_int`, arguments: [obj(tx, uq3232)] });
}
