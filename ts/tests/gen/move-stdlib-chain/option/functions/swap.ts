import { GenericArg, generic, option } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface SwapArgs {
  option: GenericArg | TransactionArgument | null;
  t0: GenericArg;
}

/**
 * Move function: `swap`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::option`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param option - Function parameter
 * @param t0 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function swap(
  tx: Transaction,
  typeArg: string,
  args: SwapArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::option::swap`,
    typeArguments: [typeArg],
    arguments: [
      option(tx, `${typeArg}`, args.option),
      generic(tx, `${typeArg}`, args.t0),
    ],
  });
}
