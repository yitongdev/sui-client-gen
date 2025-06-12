import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

export interface RemoveRuleArgs {
  transferPolicy: TransactionObjectInput;
  transferPolicyCap: TransactionObjectInput;
}

/**
 * Move function: `remove_rule`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::transfer_policy`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @typeParam T2 - Type parameter 2
 * @param tx - The transaction object
 * @param transferPolicy - Function parameter
 * @param transferPolicyCap - Function parameter
 */
export function removeRule(
  tx: Transaction,
  typeArgs: [string, string, string],
  args: RemoveRuleArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::transfer_policy::remove_rule`,
    typeArguments: typeArgs,
    arguments: [obj(tx, args.transferPolicy), obj(tx, args.transferPolicyCap)],
  });
}
