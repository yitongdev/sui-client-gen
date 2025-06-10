import { GenericArg, vector } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument } from "@mysten/sui/transactions";

/**
 * Move function: `from_keys`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::vec_set`
 *
 * @typeParam K - Type parameter 0
 * @param tx - The transaction object
 * @param keys - Function parameter
 */
export function fromKeys(
  tx: Transaction,
  typeArg: string,
  keys: Array<GenericArg> | TransactionArgument,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::vec_set::from_keys`,
    typeArguments: [typeArg],
    arguments: [vector(tx, `${typeArg}`, keys)],
  });
}
