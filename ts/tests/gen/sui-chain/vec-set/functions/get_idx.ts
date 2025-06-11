import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface GetIdxArgs {
  vecSet: TransactionObjectInput;
  t0: GenericArg;
}

/**
 * Move function: `get_idx`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::vec_set`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param vecSet - Function parameter
 * @param t0 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function getIdx(
  tx: Transaction,
  typeArg: string,
  args: GetIdxArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::vec_set::get_idx`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.vecSet), generic(tx, `${typeArg}`, args.t0)],
  });
}
