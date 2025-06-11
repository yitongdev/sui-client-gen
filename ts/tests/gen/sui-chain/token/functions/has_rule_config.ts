import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `has_rule_config`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::token`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @param tx - The transaction object
 * @param tokenPolicy - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function hasRuleConfig(
  tx: Transaction,
  typeArgs: [string, string],
  tokenPolicy: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::token::has_rule_config`,
    typeArguments: typeArgs,
    arguments: [obj(tx, tokenPolicy)],
  });
}
