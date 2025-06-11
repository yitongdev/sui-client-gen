import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface RemoveArgs {
  table: TransactionObjectInput;
  k: GenericArg;
}

/**
 * Move function: `remove`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::table`
 *
 * @typeParam K - Type parameter 0
 * @typeParam V - Type parameter 1
 * @param tx - The transaction object
 * @param table - Function parameter
 * @param k - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function remove(
  tx: Transaction,
  typeArgs: [string, string],
  args: RemoveArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::table::remove`,
    typeArguments: typeArgs,
    arguments: [obj(tx, args.table), generic(tx, `${typeArgs[0]}`, args.k)],
  });
}
