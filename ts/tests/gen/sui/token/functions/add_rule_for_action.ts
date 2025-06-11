import { obj, pure } from "../../../_framework/util.js";
import { String } from "../../../move-stdlib/string/structs/index.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface AddRuleForActionArgs {
  self: TransactionObjectInput;
  cap: TransactionObjectInput;
  action: string | TransactionArgument;
}

/**
 * Move function: `add_rule_for_action`
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
export function addRuleForAction(
  tx: Transaction,
  typeArgs: [string, string],
  args: AddRuleForActionArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::token::add_rule_for_action`,
    typeArguments: typeArgs,
    arguments: [
      obj(tx, args.self),
      obj(tx, args.cap),
      pure(tx, args.action, `${String.$typeName}`),
    ],
  });
}
