import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

export interface BorrowArgs {
  table: TransactionObjectInput;
  k: GenericArg;
}

/**
 * Move function: `borrow`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::linked_table`
 *
 * @typeParam K - Type parameter 0
 * @typeParam V - Type parameter 1
 * @param tx - The transaction object
 * @param table - Function parameter
 * @param k - Function parameter
 */
export function borrow(
  tx: Transaction,
  typeArgs: [string, string],
  args: BorrowArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::linked_table::borrow`,
    typeArguments: typeArgs,
    arguments: [obj(tx, args.table), generic(tx, `${typeArgs[0]}`, args.k)],
  });
}
