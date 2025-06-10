import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

export interface RuleConfigMutArgs {
  rule: GenericArg;
  self: TransactionObjectInput;
  cap: TransactionObjectInput;
}

/**
 * Move function: `rule_config_mut`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::token`
 *
 * @typeParam T - Type parameter 0
 * @typeParam Rule - Type parameter 1
 * @typeParam Config - Type parameter 2
 * @param tx - The transaction object
 * @param rule - Function parameter
 * @param self - Function parameter
 * @param cap - Function parameter
 */
export function ruleConfigMut(
  tx: Transaction,
  typeArgs: [string, string, string],
  args: RuleConfigMutArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::token::rule_config_mut`,
    typeArguments: typeArgs,
    arguments: [
      generic(tx, `${typeArgs[1]}`, args.rule),
      obj(tx, args.self),
      obj(tx, args.cap),
    ],
  });
}
