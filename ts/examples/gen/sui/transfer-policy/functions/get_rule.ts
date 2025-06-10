import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

export interface GetRuleArgs {
  rule: GenericArg;
  policy: TransactionObjectInput;
}

/**
 * Move function: `get_rule`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::transfer_policy`
 *
 * @typeParam T - Type parameter 0
 * @typeParam Rule - Type parameter 1
 * @typeParam Config - Type parameter 2
 * @param tx - The transaction object
 * @param rule - Function parameter
 * @param policy - Function parameter
 */
export function getRule(
  tx: Transaction,
  typeArgs: [string, string, string],
  args: GetRuleArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::transfer_policy::get_rule`,
    typeArguments: typeArgs,
    arguments: [generic(tx, `${typeArgs[1]}`, args.rule), obj(tx, args.policy)],
  });
}
