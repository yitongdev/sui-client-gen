import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface SplitFromSuiPoolArgs {
  storage: TransactionObjectInput;
  u64: bigint | TransactionArgument;
}

/**
 * Move function: `split_from_sui_pool`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::storage`
 *
 * @param tx - The transaction object
 * @param storage - Function parameter
 * @param u64 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function splitFromSuiPool(
  tx: Transaction,
  args: SplitFromSuiPoolArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::storage::split_from_sui_pool`,
    arguments: [obj(tx, args.storage), pure(tx, args.u64, `u64`)],
  });
}
