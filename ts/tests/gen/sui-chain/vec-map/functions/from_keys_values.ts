import { GenericArg, vector } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

export interface FromKeysValuesArgs {
  vecT0: Array<GenericArg> | TransactionArgument;
  vecT1: Array<GenericArg> | TransactionArgument;
}

/**
 * Move function: `from_keys_values`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::vec_map`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @param tx - The transaction object
 * @param vecT0 - Function parameter
 * @param vecT1 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function fromKeysValues(
  tx: Transaction,
  typeArgs: [string, string],
  args: FromKeysValuesArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::vec_map::from_keys_values`,
    typeArguments: typeArgs,
    arguments: [vector(tx, `${typeArgs[0]}`, args.vecT0), vector(tx, `${typeArgs[1]}`, args.vecT1)],
  });
}
