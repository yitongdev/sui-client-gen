import { GenericArg, pure, vector } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

export interface CreateEntriesArgs {
  vecU64: Array<bigint | TransactionArgument> | TransactionArgument;
  vecT0: Array<GenericArg> | TransactionArgument;
}

/**
 * Move function: `create_entries`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::priority_queue`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param vecU64 - Function parameter
 * @param vecT0 - Function parameter
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
    arguments: [pure(tx, args.vecU64, `vector<u64>`), vector(tx, `${typeArg}`, args.vecT0)],
  });
}
