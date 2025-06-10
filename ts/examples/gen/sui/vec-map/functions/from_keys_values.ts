import { GenericArg, vector } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument } from "@mysten/sui/transactions";

export interface FromKeysValuesArgs {
  keys: Array<GenericArg> | TransactionArgument;
  values: Array<GenericArg> | TransactionArgument;
}

/**
 * Move function: `from_keys_values`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::vec_map`
 *
 * @typeParam K - Type parameter 0
 * @typeParam V - Type parameter 1
 * @param tx - The transaction object
 * @param keys - Function parameter
 * @param values - Function parameter
 */
export function fromKeysValues(
  tx: Transaction,
  typeArgs: [string, string],
  args: FromKeysValuesArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::vec_map::from_keys_values`,
    typeArguments: typeArgs,
    arguments: [
      vector(tx, `${typeArgs[0]}`, args.keys),
      vector(tx, `${typeArgs[1]}`, args.values),
    ],
  });
}
