import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface ConfirmWithPolicyCapArgs {
  tokenPolicyCap: TransactionObjectInput;
  actionRequest: TransactionObjectInput;
}

/**
 * Move function: `confirm_with_policy_cap`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::token`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param tokenPolicyCap - Function parameter
 * @param actionRequest - Function parameter
 * @param txContext - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function confirmWithPolicyCap(
  tx: Transaction,
  typeArg: string,
  args: ConfirmWithPolicyCapArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::token::confirm_with_policy_cap`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.tokenPolicyCap), obj(tx, args.actionRequest)],
  });
}
