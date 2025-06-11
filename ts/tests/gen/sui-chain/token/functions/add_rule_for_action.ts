import { obj, pure } from "../../../_framework/util.js";
import { String } from "../../../move-stdlib-chain/string/structs/index.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface AddRuleForActionArgs {
  tokenPolicy: TransactionObjectInput;
  tokenPolicyCap: TransactionObjectInput;
  string: string | TransactionArgument;
}

/**
 * Move function: `add_rule_for_action`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::token`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @param tx - The transaction object
 * @param tokenPolicy - Function parameter
 * @param tokenPolicyCap - Function parameter
 * @param string - Function parameter
 * @param txContext - Function parameter
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
      obj(tx, args.tokenPolicy),
      obj(tx, args.tokenPolicyCap),
      pure(tx, args.string, `${String.$typeName}`),
    ],
  });
}
