import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface GetIdxOptArgs {
  self: TransactionObjectInput;
  key: GenericArg;
}

/**
 * Move function: `get_idx_opt`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::vec_set`
 *
 * @typeParam K - Type parameter 0
 * @param tx - The transaction object
 * @param self - Function parameter
 * @param key - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function getIdxOpt(
  tx: Transaction,
  typeArg: string,
  args: GetIdxOptArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::vec_set::get_idx_opt`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.self), generic(tx, `${typeArg}`, args.key)],
  });
}
