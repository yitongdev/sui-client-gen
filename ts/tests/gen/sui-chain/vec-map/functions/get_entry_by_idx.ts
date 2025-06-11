import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface GetEntryByIdxArgs {
  vecMap: TransactionObjectInput;
  u64: bigint | TransactionArgument;
}

/**
 * Move function: `get_entry_by_idx`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::vec_map`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @param tx - The transaction object
 * @param vecMap - Function parameter
 * @param u64 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function getEntryByIdx(
  tx: Transaction,
  typeArgs: [string, string],
  args: GetEntryByIdxArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::vec_map::get_entry_by_idx`,
    typeArguments: typeArgs,
    arguments: [obj(tx, args.vecMap), pure(tx, args.u64, `u64`)],
  });
}
