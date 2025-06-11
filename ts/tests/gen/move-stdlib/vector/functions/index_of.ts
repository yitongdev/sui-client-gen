import { GenericArg, generic, vector } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface IndexOfArgs {
  v: Array<GenericArg> | TransactionArgument;
  e: GenericArg;
}

/**
 * Move function: `index_of`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::vector`
 *
 * @typeParam Element - Type parameter 0
 * @param tx - The transaction object
 * @param v - Function parameter
 * @param e - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function indexOf(
  tx: Transaction,
  typeArg: string,
  args: IndexOfArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::vector::index_of`,
    typeArguments: [typeArg],
    arguments: [
      vector(tx, `${typeArg}`, args.v),
      generic(tx, `${typeArg}`, args.e),
    ],
  });
}
