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
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::vec_map`
 *
 * @typeParam K - Type parameter 0
 * @typeParam V - Type parameter 1
 * @param tx - The transaction object
 * @param self - Function parameter
 * @param key - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function getIdxOpt(
  tx: Transaction,
  typeArgs: [string, string],
  args: GetIdxOptArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::vec_map::get_idx_opt`,
    typeArguments: typeArgs,
    arguments: [obj(tx, args.self), generic(tx, `${typeArgs[0]}`, args.key)],
  });
}
