import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface GetRuleArgs {
  t1: GenericArg;
  transferPolicy: TransactionObjectInput;
}

/**
 * Move function: `get_rule`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::transfer_policy`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @typeParam T2 - Type parameter 2
 * @param tx - The transaction object
 * @param t1 - Function parameter
 * @param transferPolicy - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function getRule(
  tx: Transaction,
  typeArgs: [string, string, string],
  args: GetRuleArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::transfer_policy::get_rule`,
    typeArguments: typeArgs,
    arguments: [
      generic(tx, `${typeArgs[1]}`, args.t1),
      obj(tx, args.transferPolicy),
    ],
  });
}
