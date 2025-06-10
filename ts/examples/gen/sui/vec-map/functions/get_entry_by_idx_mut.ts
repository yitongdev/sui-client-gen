import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
} from "@mysten/sui/transactions";

export interface GetEntryByIdxMutArgs {
  self: TransactionObjectInput;
  idx: bigint | TransactionArgument;
}

/**
 * Move function: `get_entry_by_idx_mut`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::vec_map`
 *
 * @typeParam K - Type parameter 0
 * @typeParam V - Type parameter 1
 * @param tx - The transaction object
 * @param self - Function parameter
 * @param idx - Function parameter
 */
export function getEntryByIdxMut(
  tx: Transaction,
  typeArgs: [string, string],
  args: GetEntryByIdxMutArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::vec_map::get_entry_by_idx_mut`,
    typeArguments: typeArgs,
    arguments: [obj(tx, args.self), pure(tx, args.idx, `u64`)],
  });
}
