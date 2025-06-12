import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

export interface Exists_Args {
  uid: TransactionObjectInput;
  t0: GenericArg;
}

/**
 * Move function: `exists_`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::dynamic_object_field`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param uid - Function parameter
 * @param t0 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function exists_(tx: Transaction, typeArg: string, args: Exists_Args): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::dynamic_object_field::exists_`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.uid), generic(tx, `${typeArg}`, args.t0)],
  });
}
