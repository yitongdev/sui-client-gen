import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface InternalHashToArgs {
  type: number | TransactionArgument;
  m: Array<number | TransactionArgument> | TransactionArgument;
}

/**
 * Move function: `internal_hash_to`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::group_ops`
 *
 * @param tx - The transaction object
 * @param type - Function parameter
 * @param m - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function internalHashTo(
  tx: Transaction,
  args: InternalHashToArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::group_ops::internal_hash_to`,
    arguments: [pure(tx, args.type, `u8`), pure(tx, args.m, `vector<u8>`)],
  });
}
