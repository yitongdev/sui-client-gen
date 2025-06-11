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
  vecEntry: Array<TransactionObjectInput> | TransactionArgument;
  u64: bigint | TransactionArgument;
}

/**
 * Move function: `restore_heap_recursive`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::priority_queue`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param vecEntry - Function parameter
 * @param u64 - Function parameter
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
      vector(tx, `${Entry.$typeName}<${typeArg}>`, args.vecEntry),
      pure(tx, args.u64, `u64`),
    ],
  });
}
