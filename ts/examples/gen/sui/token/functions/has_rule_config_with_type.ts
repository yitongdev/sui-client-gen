import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

/**
 * Move function: `has_rule_config_with_type`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::token`
 *
 * @typeParam T - Type parameter 0
 * @typeParam Rule - Type parameter 1
 * @typeParam Config - Type parameter 2
 * @param tx - The transaction object
 * @param self - Function parameter
 */
export function hasRuleConfigWithType(
  tx: Transaction,
  typeArgs: [string, string, string],
  self: TransactionObjectInput,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::token::has_rule_config_with_type`,
    typeArguments: typeArgs,
    arguments: [obj(tx, self)],
  });
}
