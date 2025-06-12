import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `bitwise_not`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::u32`
 *
 * @param tx - The transaction object
 * @param u32 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function bitwiseNot(tx: Transaction, u32: number | TransactionArgument): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::u32::bitwise_not`,
    arguments: [pure(tx, u32, `u32`)],
  });
}
