import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface RemoveRuleConfigArgs {
  self: TransactionObjectInput;
  cap: TransactionObjectInput;
}

/**
 * Move function: `remove_rule_config`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::token`
 *
 * @typeParam T - Type parameter 0
 * @typeParam Rule - Type parameter 1
 * @typeParam Config - Type parameter 2
 * @param tx - The transaction object
 * @param self - Function parameter
 * @param cap - Function parameter
 * @param ctx - Function parameter
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
    arguments: [obj(tx, args.self), obj(tx, args.cap)],
  });
}
