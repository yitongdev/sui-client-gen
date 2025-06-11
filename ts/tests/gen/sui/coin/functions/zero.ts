import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `zero`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::coin`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param ctx - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function zero(tx: Transaction, typeArg: string): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::coin::zero`,
    typeArguments: [typeArg],
    arguments: [],
  });
}
