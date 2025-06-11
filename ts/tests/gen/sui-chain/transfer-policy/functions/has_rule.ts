import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `has_rule`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::transfer_policy`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @param tx - The transaction object
 * @param transferPolicy - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function hasRule(
  tx: Transaction,
  typeArgs: [string, string],
  transferPolicy: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::transfer_policy::has_rule`,
    typeArguments: typeArgs,
    arguments: [obj(tx, transferPolicy)],
  });
}
