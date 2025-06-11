import { pure, vector } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Entry } from "../index.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface RestoreHeapRecursiveArgs {
  v: Array<TransactionObjectInput> | TransactionArgument;
  i: bigint | TransactionArgument;
}

/**
 * Move function: `restore_heap_recursive`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::priority_queue`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param v - Function parameter
 * @param i - Function parameter
 */
export function restoreHeapRecursive(
  tx: Transaction,
  typeArg: string,
  args: RestoreHeapRecursiveArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::priority_queue::restore_heap_recursive`,
    typeArguments: [typeArg],
    arguments: [
      vector(tx, `${Entry.$typeName}<${typeArg}>`, args.v),
      pure(tx, args.i, `u64`),
    ],
  });
}
