import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `pop_max`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::priority_queue`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param priorityQueue - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function popMax(
  tx: Transaction,
  typeArg: string,
  priorityQueue: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::priority_queue::pop_max`,
    typeArguments: [typeArg],
    arguments: [obj(tx, priorityQueue)],
  });
}
