import { GenericArg, generic, option } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface ContainsArgs {
  t: GenericArg | TransactionArgument | null;
  eRef: GenericArg;
}

/**
 * Move function: `contains`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::option`
 *
 * @typeParam Element - Type parameter 0
 * @param tx - The transaction object
 * @param t - Function parameter
 * @param eRef - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function contains(
  tx: Transaction,
  typeArg: string,
  args: ContainsArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::option::contains`,
    typeArguments: [typeArg],
    arguments: [
      option(tx, `${typeArg}`, args.t),
      generic(tx, `${typeArg}`, args.eRef),
    ],
  });
}
