import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

export interface AddApprovalArgs {
  t: GenericArg;
  request: TransactionObjectInput;
}

/**
 * Move function: `add_approval`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::token`
 *
 * @typeParam T - Type parameter 0
 * @typeParam W - Type parameter 1
 * @param tx - The transaction object
 * @param t - Function parameter
 * @param request - Function parameter
 * @param ctx - Function parameter
 */
export function addApproval(
  tx: Transaction,
  typeArgs: [string, string],
  args: AddApprovalArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::token::add_approval`,
    typeArguments: typeArgs,
    arguments: [generic(tx, `${typeArgs[1]}`, args.t), obj(tx, args.request)],
  });
}
