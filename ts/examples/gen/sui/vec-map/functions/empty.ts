import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `empty`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::vec_map`
 *
 * @typeParam K - Type parameter 0
 * @typeParam V - Type parameter 1
 * @param tx - The transaction object
 * @returns TransactionResult - The transaction result
 */
export function empty(tx: Transaction, typeArgs: [string, string]): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::vec_map::empty`,
    typeArguments: typeArgs,
    arguments: [],
  });
}
