import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface RuleConfigMutArgs {
  t1: GenericArg;
  tokenPolicy: TransactionObjectInput;
  tokenPolicyCap: TransactionObjectInput;
}

/**
 * Move function: `rule_config_mut`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::token`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @typeParam T2 - Type parameter 2
 * @param tx - The transaction object
 * @param t1 - Function parameter
 * @param tokenPolicy - Function parameter
 * @param tokenPolicyCap - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function ruleConfigMut(
  tx: Transaction,
  typeArgs: [string, string, string],
  args: RuleConfigMutArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::token::rule_config_mut`,
    typeArguments: typeArgs,
    arguments: [
      generic(tx, `${typeArgs[1]}`, args.t1),
      obj(tx, args.tokenPolicy),
      obj(tx, args.tokenPolicyCap),
    ],
  });
}
