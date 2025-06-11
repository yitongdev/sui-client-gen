import { GenericArg, generic, vector } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface ContainsArgs {
  v: Array<GenericArg> | TransactionArgument;
  e: GenericArg;
}

/**
 * Move function: `contains`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::vector`
 *
 * @typeParam Element - Type parameter 0
 * @param tx - The transaction object
 * @param v - Function parameter
 * @param e - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function contains(
  tx: Transaction,
  typeArg: string,
  args: ContainsArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::vector::contains`,
    typeArguments: [typeArg],
    arguments: [
      vector(tx, `${typeArg}`, args.v),
      generic(tx, `${typeArg}`, args.e),
    ],
  });
}
