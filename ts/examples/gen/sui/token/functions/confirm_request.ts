import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

export interface ConfirmRequestArgs {
  policy: TransactionObjectInput;
  request: TransactionObjectInput;
}

/**
 * Move function: `confirm_request`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::token`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param policy - Function parameter
 * @param request - Function parameter
 * @param ctx - Function parameter
 */
export function confirmRequest(
  tx: Transaction,
  typeArg: string,
  args: ConfirmRequestArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::token::confirm_request`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.policy), obj(tx, args.request)],
  });
}
