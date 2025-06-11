import { GenericArg, generic, obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface InsertArgs {
  pq: TransactionObjectInput;
  priority: bigint | TransactionArgument;
  value: GenericArg;
}

/**
 * Move function: `insert`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::priority_queue`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param pq - Function parameter
 * @param priority - Function parameter
 * @param value - Function parameter
 */
export function insert(
  tx: Transaction,
  typeArg: string,
  args: InsertArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::priority_queue::insert`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.pq),
      pure(tx, args.priority, `u64`),
      generic(tx, `${typeArg}`, args.value),
    ],
  });
}
