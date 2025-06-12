import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `pop_back`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::linked_table`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @param tx - The transaction object
 * @param linkedTable - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function popBack(
  tx: Transaction,
  typeArgs: [string, string],
  linkedTable: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::linked_table::pop_back`,
    typeArguments: typeArgs,
    arguments: [obj(tx, linkedTable)],
  });
}
