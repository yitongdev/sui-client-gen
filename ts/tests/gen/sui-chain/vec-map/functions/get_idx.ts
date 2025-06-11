import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface GetIdxArgs {
  vecMap: TransactionObjectInput;
  t0: GenericArg;
}

/**
 * Move function: `get_idx`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::vec_map`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @param tx - The transaction object
 * @param vecMap - Function parameter
 * @param t0 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function getIdx(
  tx: Transaction,
  typeArgs: [string, string],
  args: GetIdxArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::vec_map::get_idx`,
    typeArguments: typeArgs,
    arguments: [obj(tx, args.vecMap), generic(tx, `${typeArgs[0]}`, args.t0)],
  });
}
