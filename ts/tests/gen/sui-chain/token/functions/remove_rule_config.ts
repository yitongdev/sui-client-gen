import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

export interface RemoveRuleConfigArgs {
  tokenPolicy: TransactionObjectInput;
  tokenPolicyCap: TransactionObjectInput;
}

/**
 * Move function: `remove_rule_config`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::token`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @typeParam T2 - Type parameter 2
 * @param tx - The transaction object
 * @param tokenPolicy - Function parameter
 * @param tokenPolicyCap - Function parameter
 * @param txContext - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function removeRuleConfig(
  tx: Transaction,
  typeArgs: [string, string, string],
  args: RemoveRuleConfigArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::token::remove_rule_config`,
    typeArguments: typeArgs,
    arguments: [obj(tx, args.tokenPolicy), obj(tx, args.tokenPolicyCap)],
  });
}
