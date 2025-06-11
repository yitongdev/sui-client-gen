import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface AddRuleArgs {
  t1: GenericArg;
  transferPolicy: TransactionObjectInput;
  transferPolicyCap: TransactionObjectInput;
  t2: GenericArg;
}

/**
 * Move function: `add_rule`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::transfer_policy`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @typeParam T2 - Type parameter 2
 * @param tx - The transaction object
 * @param t1 - Function parameter
 * @param transferPolicy - Function parameter
 * @param transferPolicyCap - Function parameter
 * @param t2 - Function parameter
 */
export function addRule(
  tx: Transaction,
  typeArgs: [string, string, string],
  args: AddRuleArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::transfer_policy::add_rule`,
    typeArguments: typeArgs,
    arguments: [
      generic(tx, `${typeArgs[1]}`, args.t1),
      obj(tx, args.transferPolicy),
      obj(tx, args.transferPolicyCap),
      generic(tx, `${typeArgs[2]}`, args.t2),
    ],
  });
}
