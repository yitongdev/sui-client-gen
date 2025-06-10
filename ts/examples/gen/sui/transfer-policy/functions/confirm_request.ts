import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

export interface ConfirmRequestArgs {
  self: TransactionObjectInput;
  request: TransactionObjectInput;
}

/**
 * Move function: `confirm_request`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::transfer_policy`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param self - Function parameter
 * @param request - Function parameter
 */
export function confirmRequest(
  tx: Transaction,
  typeArg: string,
  args: ConfirmRequestArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::transfer_policy::confirm_request`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.self), obj(tx, args.request)],
  });
}
