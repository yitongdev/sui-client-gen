import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

export interface InsertArgs {
  vecSet: TransactionObjectInput;
  t0: GenericArg;
}

/**
 * Move function: `insert`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::vec_set`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param vecSet - Function parameter
 * @param t0 - Function parameter
 */
export function insert(tx: Transaction, typeArg: string, args: InsertArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::vec_set::insert`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.vecSet), generic(tx, `${typeArg}`, args.t0)],
  });
}
