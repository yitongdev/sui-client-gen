import { GenericArg, pure, vector } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface CreateEntriesArgs {
  p: Array<bigint | TransactionArgument> | TransactionArgument;
  v: Array<GenericArg> | TransactionArgument;
}

/**
 * Move function: `create_entries`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::priority_queue`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param p - Function parameter
 * @param v - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function createEntries(
  tx: Transaction,
  typeArg: string,
  args: CreateEntriesArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::priority_queue::create_entries`,
    typeArguments: [typeArg],
    arguments: [
      pure(tx, args.p, `vector<u64>`),
      vector(tx, `${typeArg}`, args.v),
    ],
  });
}
