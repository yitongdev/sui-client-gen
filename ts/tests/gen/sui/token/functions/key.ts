import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `key`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::token`
 *
 * @typeParam Rule - Type parameter 0
 * @param tx - The transaction object
 * @returns TransactionResult - The transaction result
 */
export function key(tx: Transaction, typeArg: string): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::token::key`,
    typeArguments: [typeArg],
    arguments: [],
  });
}
