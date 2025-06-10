import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

export interface ConfirmWithPolicyCapArgs {
  policyCap: TransactionObjectInput;
  request: TransactionObjectInput;
}

/**
 * Move function: `confirm_with_policy_cap`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::token`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param policyCap - Function parameter
 * @param request - Function parameter
 * @param ctx - Function parameter
 */
export function confirmWithPolicyCap(
  tx: Transaction,
  typeArg: string,
  args: ConfirmWithPolicyCapArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::token::confirm_with_policy_cap`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.policyCap), obj(tx, args.request)],
  });
}
