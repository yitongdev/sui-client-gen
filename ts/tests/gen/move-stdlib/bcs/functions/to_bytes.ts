import { GenericArg, generic } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `to_bytes`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::bcs`
 *
 * @typeParam MoveValue - Type parameter 0
 * @param tx - The transaction object
 * @param v - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function toBytes(tx: Transaction, typeArg: string, v: GenericArg): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::bcs::to_bytes`,
    typeArguments: [typeArg],
    arguments: [generic(tx, `${typeArg}`, v)],
  });
}
