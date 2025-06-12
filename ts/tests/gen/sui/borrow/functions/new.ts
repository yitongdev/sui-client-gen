import { GenericArg, generic } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `new`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::borrow`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param value - Function parameter
 * @param ctx - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function new_(tx: Transaction, typeArg: string, value: GenericArg): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::borrow::new`,
    typeArguments: [typeArg],
    arguments: [generic(tx, `${typeArg}`, value)],
  });
}
