import { GenericArg, generic, option } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface DestroyWithDefaultArgs {
  option: GenericArg | TransactionArgument | null;
  t0: GenericArg;
}

/**
 * Move function: `destroy_with_default`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::option`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param option - Function parameter
 * @param t0 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function destroyWithDefault(
  tx: Transaction,
  typeArg: string,
  args: DestroyWithDefaultArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::option::destroy_with_default`,
    typeArguments: [typeArg],
    arguments: [
      option(tx, `${typeArg}`, args.option),
      generic(tx, `${typeArg}`, args.t0),
    ],
  });
}
