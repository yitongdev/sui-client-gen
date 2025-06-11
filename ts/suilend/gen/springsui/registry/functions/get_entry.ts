import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `get_entry`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::registry`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @param tx - The transaction object
 * @param registry - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function getEntry(
  tx: Transaction,
  typeArgs: [string, string],
  registry: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::registry::get_entry`,
    typeArguments: typeArgs,
    arguments: [obj(tx, registry)],
  });
}
