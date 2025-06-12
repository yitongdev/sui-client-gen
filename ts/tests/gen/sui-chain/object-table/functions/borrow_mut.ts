import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

export interface BorrowMutArgs {
  objectTable: TransactionObjectInput;
  t0: GenericArg;
}

/**
 * Move function: `borrow_mut`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::object_table`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @param tx - The transaction object
 * @param objectTable - Function parameter
 * @param t0 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function borrowMut(
  tx: Transaction,
  typeArgs: [string, string],
  args: BorrowMutArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::object_table::borrow_mut`,
    typeArguments: typeArgs,
    arguments: [obj(tx, args.objectTable), generic(tx, `${typeArgs[0]}`, args.t0)],
  });
}
