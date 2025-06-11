import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface RemoveRuleArgs {
  policy: TransactionObjectInput;
  cap: TransactionObjectInput;
}

/**
 * Move function: `remove_rule`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::transfer_policy`
 *
 * @typeParam T - Type parameter 0
 * @typeParam Rule - Type parameter 1
 * @typeParam Config - Type parameter 2
 * @param tx - The transaction object
 * @param policy - Function parameter
 * @param cap - Function parameter
 */
export function removeRule(
  tx: Transaction,
  typeArgs: [string, string, string],
  args: RemoveRuleArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::transfer_policy::remove_rule`,
    typeArguments: typeArgs,
    arguments: [obj(tx, args.policy), obj(tx, args.cap)],
  });
}
