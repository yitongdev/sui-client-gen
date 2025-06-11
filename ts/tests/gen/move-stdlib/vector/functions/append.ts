import { GenericArg, vector } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface AppendArgs {
  lhs: Array<GenericArg> | TransactionArgument;
  other: Array<GenericArg> | TransactionArgument;
}

/**
 * Move function: `append`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::vector`
 *
 * @typeParam Element - Type parameter 0
 * @param tx - The transaction object
 * @param lhs - Function parameter
 * @param other - Function parameter
 */
export function append(
  tx: Transaction,
  typeArg: string,
  args: AppendArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::vector::append`,
    typeArguments: [typeArg],
    arguments: [
      vector(tx, `${typeArg}`, args.lhs),
      vector(tx, `${typeArg}`, args.other),
    ],
  });
}
