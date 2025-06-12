import { GenericArg, generic, obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface InsertArgs {
  priorityQueue: TransactionObjectInput;
  u64: bigint | TransactionArgument;
  t0: GenericArg;
}

/**
 * Move function: `insert`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::priority_queue`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param priorityQueue - Function parameter
 * @param u64 - Function parameter
 * @param t0 - Function parameter
 */
export function insert(tx: Transaction, typeArg: string, args: InsertArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::priority_queue::insert`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.priorityQueue),
      pure(tx, args.u64, `u64`),
      generic(tx, `${typeArg}`, args.t0),
    ],
  });
}
