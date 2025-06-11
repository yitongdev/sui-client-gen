import { GenericArg, generic } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `some`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::option`
 *
 * @typeParam Element - Type parameter 0
 * @param tx - The transaction object
 * @param e - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function some(
  tx: Transaction,
  typeArg: string,
  e: GenericArg,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::option::some`,
    typeArguments: [typeArg],
    arguments: [generic(tx, `${typeArg}`, e)],
  });
}
