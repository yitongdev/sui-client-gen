import { GenericArg, vector } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface AppendArgs {
  vecT01: Array<GenericArg> | TransactionArgument;
  vecT02: Array<GenericArg> | TransactionArgument;
}

/**
 * Move function: `append`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::vector`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param vecT01 - Function parameter
 * @param vecT02 - Function parameter
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
      vector(tx, `${typeArg}`, args.vecT01),
      vector(tx, `${typeArg}`, args.vecT02),
    ],
  });
}
