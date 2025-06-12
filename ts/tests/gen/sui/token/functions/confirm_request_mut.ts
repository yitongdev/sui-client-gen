import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

export interface ConfirmRequestMutArgs {
  policy: TransactionObjectInput;
  request: TransactionObjectInput;
}

/**
 * Move function: `confirm_request_mut`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::token`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param policy - Function parameter
 * @param request - Function parameter
 * @param ctx - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function confirmRequestMut(
  tx: Transaction,
  typeArg: string,
  args: ConfirmRequestMutArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::token::confirm_request_mut`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.policy), obj(tx, args.request)],
  });
}
