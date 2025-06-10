import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

export interface AddArgs {
  table: TransactionObjectInput;
  k: GenericArg;
  v: GenericArg;
}

/**
 * Move function: `add`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::table`
 *
 * @typeParam K - Type parameter 0
 * @typeParam V - Type parameter 1
 * @param tx - The transaction object
 * @param table - Function parameter
 * @param k - Function parameter
 * @param v - Function parameter
 */
export function add(
  tx: Transaction,
  typeArgs: [string, string],
  args: AddArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::table::add`,
    typeArguments: typeArgs,
    arguments: [
      obj(tx, args.table),
      generic(tx, `${typeArgs[0]}`, args.k),
      generic(tx, `${typeArgs[1]}`, args.v),
    ],
  });
}
