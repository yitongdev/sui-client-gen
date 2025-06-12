import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `get_with_original_ids`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::type_name`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @returns TransactionResult - The transaction result
 */
export function getWithOriginalIds(tx: Transaction, typeArg: string): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::type_name::get_with_original_ids`,
    typeArguments: [typeArg],
    arguments: [],
  });
}
