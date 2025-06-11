import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface AddRuleArgs {
  rule: GenericArg;
  policy: TransactionObjectInput;
  cap: TransactionObjectInput;
  cfg: GenericArg;
}

/**
 * Move function: `add_rule`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::transfer_policy`
 *
 * @typeParam T - Type parameter 0
 * @typeParam Rule - Type parameter 1
 * @typeParam Config - Type parameter 2
 * @param tx - The transaction object
 * @param rule - Function parameter
 * @param policy - Function parameter
 * @param cap - Function parameter
 * @param cfg - Function parameter
 */
export function addRule(
  tx: Transaction,
  typeArgs: [string, string, string],
  args: AddRuleArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::transfer_policy::add_rule`,
    typeArguments: typeArgs,
    arguments: [
      generic(tx, `${typeArgs[1]}`, args.rule),
      obj(tx, args.policy),
      obj(tx, args.cap),
      generic(tx, `${typeArgs[2]}`, args.cfg),
    ],
  });
}
