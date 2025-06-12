import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

export interface AddRuleConfigArgs {
  t1: GenericArg;
  tokenPolicy: TransactionObjectInput;
  tokenPolicyCap: TransactionObjectInput;
  t2: GenericArg;
}

/**
 * Move function: `add_rule_config`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::token`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @typeParam T2 - Type parameter 2
 * @param tx - The transaction object
 * @param t1 - Function parameter
 * @param tokenPolicy - Function parameter
 * @param tokenPolicyCap - Function parameter
 * @param t2 - Function parameter
 * @param txContext - Function parameter
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
      generic(tx, `${typeArgs[1]}`, args.t1),
      obj(tx, args.tokenPolicy),
      obj(tx, args.tokenPolicyCap),
      generic(tx, `${typeArgs[2]}`, args.t2),
    ],
  });
}
