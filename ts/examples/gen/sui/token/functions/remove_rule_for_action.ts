import { String } from "../../../_dependencies/source/0x1/string/structs/index.js";
import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface RemoveRuleForActionArgs {
  self: TransactionObjectInput;
  cap: TransactionObjectInput;
  action: string | TransactionArgument;
}

/**
 * Move function: `remove_rule_for_action`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::token`
 *
 * @typeParam T - Type parameter 0
 * @typeParam Rule - Type parameter 1
 * @param tx - The transaction object
 * @param self - Function parameter
 * @param cap - Function parameter
 * @param action - Function parameter
 * @param ctx - Function parameter
 */
export function removeRuleForAction(
  tx: Transaction,
  typeArgs: [string, string],
  args: RemoveRuleForActionArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::token::remove_rule_for_action`,
    typeArguments: typeArgs,
    arguments: [
      obj(tx, args.self),
      obj(tx, args.cap),
      pure(tx, args.action, `${String.$typeName}`),
    ],
  });
}
