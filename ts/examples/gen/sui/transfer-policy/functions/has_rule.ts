import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

/**
 * Move function: `has_rule`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::transfer_policy`
 *
 * @typeParam T - Type parameter 0
 * @typeParam Rule - Type parameter 1
 * @param tx - The transaction object
 * @param policy - Function parameter
 */
export function hasRule(
  tx: Transaction,
  typeArgs: [string, string],
  policy: TransactionObjectInput,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::transfer_policy::has_rule`,
    typeArguments: typeArgs,
    arguments: [obj(tx, policy)],
  });
}
