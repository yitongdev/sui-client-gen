import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
} from "@mysten/sui/transactions";

export interface GetEntryByIdxArgs {
  self: TransactionObjectInput;
  idx: bigint | TransactionArgument;
}

/**
 * Move function: `get_entry_by_idx`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::vec_map`
 *
 * @typeParam K - Type parameter 0
 * @typeParam V - Type parameter 1
 * @param tx - The transaction object
 * @param self - Function parameter
 * @param idx - Function parameter
 */
export function getEntryByIdx(
  tx: Transaction,
  typeArgs: [string, string],
  args: GetEntryByIdxArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::vec_map::get_entry_by_idx`,
    typeArguments: typeArgs,
    arguments: [obj(tx, args.self), pure(tx, args.idx, `u64`)],
  });
}
