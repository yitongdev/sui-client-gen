import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface PrevArgs {
  linkedTable: TransactionObjectInput;
  t0: GenericArg;
}

/**
 * Move function: `prev`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::linked_table`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @param tx - The transaction object
 * @param linkedTable - Function parameter
 * @param t0 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function prev(
  tx: Transaction,
  typeArgs: [string, string],
  args: PrevArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::linked_table::prev`,
    typeArguments: typeArgs,
    arguments: [
      obj(tx, args.linkedTable),
      generic(tx, `${typeArgs[0]}`, args.t0),
    ],
  });
}
