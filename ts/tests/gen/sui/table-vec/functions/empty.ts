import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `empty`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::table_vec`
 *
 * @typeParam Element - Type parameter 0
 * @param tx - The transaction object
 * @param ctx - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function empty(tx: Transaction, typeArg: string): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::table_vec::empty`,
    typeArguments: [typeArg],
    arguments: [],
  });
}
