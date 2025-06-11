import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface PushFrontArgs {
  linkedTable: TransactionObjectInput;
  t0: GenericArg;
  t1: GenericArg;
}

/**
 * Move function: `push_front`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::linked_table`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @param tx - The transaction object
 * @param linkedTable - Function parameter
 * @param t0 - Function parameter
 * @param t1 - Function parameter
 */
export function pushFront(
  tx: Transaction,
  typeArgs: [string, string],
  args: PushFrontArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::linked_table::push_front`,
    typeArguments: typeArgs,
    arguments: [
      obj(tx, args.linkedTable),
      generic(tx, `${typeArgs[0]}`, args.t0),
      generic(tx, `${typeArgs[1]}`, args.t1),
    ],
  });
}
