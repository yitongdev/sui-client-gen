import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

export interface InsertArgs {
  self: TransactionObjectInput;
  key: GenericArg;
}

/**
 * Move function: `insert`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::vec_set`
 *
 * @typeParam K - Type parameter 0
 * @param tx - The transaction object
 * @param self - Function parameter
 * @param key - Function parameter
 */
export function insert(tx: Transaction, typeArg: string, args: InsertArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::vec_set::insert`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.self), generic(tx, `${typeArg}`, args.key)],
  });
}
