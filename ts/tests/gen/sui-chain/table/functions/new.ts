import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `new`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::table`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @param tx - The transaction object
 * @param txContext - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function new_(
  tx: Transaction,
  typeArgs: [string, string],
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::table::new`,
    typeArguments: typeArgs,
    arguments: [],
  });
}
