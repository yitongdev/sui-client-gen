import { pure, vector } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Entry } from "../index.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface MaxHeapifyRecursiveArgs {
  vecEntry: Array<TransactionObjectInput> | TransactionArgument;
  u641: bigint | TransactionArgument;
  u642: bigint | TransactionArgument;
}

/**
 * Move function: `max_heapify_recursive`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::priority_queue`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param vecEntry - Function parameter
 * @param u641 - Function parameter
 * @param u642 - Function parameter
 */
export function maxHeapifyRecursive(
  tx: Transaction,
  typeArg: string,
  args: MaxHeapifyRecursiveArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::priority_queue::max_heapify_recursive`,
    typeArguments: [typeArg],
    arguments: [
      vector(tx, `${Entry.$typeName}<${typeArg}>`, args.vecEntry),
      pure(tx, args.u641, `u64`),
      pure(tx, args.u642, `u64`),
    ],
  });
}
