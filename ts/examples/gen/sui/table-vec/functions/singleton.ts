import { GenericArg, generic } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `singleton`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::table_vec`
 *
 * @typeParam Element - Type parameter 0
 * @param tx - The transaction object
 * @param e - Function parameter
 * @param ctx - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function singleton(tx: Transaction, typeArg: string, e: GenericArg): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::table_vec::singleton`,
    typeArguments: [typeArg],
    arguments: [generic(tx, `${typeArg}`, e)],
  });
}
