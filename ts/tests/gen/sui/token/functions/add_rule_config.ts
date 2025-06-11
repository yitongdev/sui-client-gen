import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface AddRuleConfigArgs {
  rule: GenericArg;
  self: TransactionObjectInput;
  cap: TransactionObjectInput;
  config: GenericArg;
}

/**
 * Move function: `add_rule_config`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::token`
 *
 * @typeParam T - Type parameter 0
 * @typeParam Rule - Type parameter 1
 * @typeParam Config - Type parameter 2
 * @param tx - The transaction object
 * @param rule - Function parameter
 * @param self - Function parameter
 * @param cap - Function parameter
 * @param config - Function parameter
 * @param ctx - Function parameter
 */
export function addRuleConfig(
  tx: Transaction,
  typeArgs: [string, string, string],
  args: AddRuleConfigArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::token::add_rule_config`,
    typeArguments: typeArgs,
    arguments: [
      generic(tx, `${typeArgs[1]}`, args.rule),
      obj(tx, args.self),
      obj(tx, args.cap),
      generic(tx, `${typeArgs[2]}`, args.config),
    ],
  });
}
