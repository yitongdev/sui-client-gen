import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `empty`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::vector`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @returns TransactionResult - The transaction result
 */
export function empty(tx: Transaction, typeArg: string): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::vector::empty`,
    typeArguments: [typeArg],
    arguments: [],
  });
}
