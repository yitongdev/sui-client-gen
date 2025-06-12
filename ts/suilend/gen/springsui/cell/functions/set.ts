import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

export interface SetArgs {
  cell: TransactionObjectInput;
  t0: GenericArg;
}

/**
 * Move function: `set`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::cell`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param cell - Function parameter
 * @param t0 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function set(tx: Transaction, typeArg: string, args: SetArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::cell::set`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.cell), generic(tx, `${typeArg}`, args.t0)],
  });
}
