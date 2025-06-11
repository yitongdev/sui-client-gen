import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface PushBackArgs {
  table: TransactionObjectInput;
  k: GenericArg;
  value: GenericArg;
}

/**
 * Move function: `push_back`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::linked_table`
 *
 * @typeParam K - Type parameter 0
 * @typeParam V - Type parameter 1
 * @param tx - The transaction object
 * @param table - Function parameter
 * @param k - Function parameter
 * @param value - Function parameter
 */
export function pushBack(
  tx: Transaction,
  typeArgs: [string, string],
  args: PushBackArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::linked_table::push_back`,
    typeArguments: typeArgs,
    arguments: [
      obj(tx, args.table),
      generic(tx, `${typeArgs[0]}`, args.k),
      generic(tx, `${typeArgs[1]}`, args.value),
    ],
  });
}
