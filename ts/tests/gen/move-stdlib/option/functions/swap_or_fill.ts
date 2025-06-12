import { GenericArg, generic, option } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

export interface SwapOrFillArgs {
  t: GenericArg | TransactionArgument | null;
  e: GenericArg;
}

/**
 * Move function: `swap_or_fill`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::option`
 *
 * @typeParam Element - Type parameter 0
 * @param tx - The transaction object
 * @param t - Function parameter
 * @param e - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function swapOrFill(
  tx: Transaction,
  typeArg: string,
  args: SwapOrFillArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::option::swap_or_fill`,
    typeArguments: [typeArg],
    arguments: [option(tx, `${typeArg}`, args.t), generic(tx, `${typeArg}`, args.e)],
  });
}
