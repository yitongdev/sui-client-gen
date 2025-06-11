import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface ConfirmRequestArgs {
  transferPolicy: TransactionObjectInput;
  transferRequest: TransactionObjectInput;
}

/**
 * Move function: `confirm_request`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::transfer_policy`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param transferPolicy - Function parameter
 * @param transferRequest - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function confirmRequest(
  tx: Transaction,
  typeArg: string,
  args: ConfirmRequestArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::transfer_policy::confirm_request`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.transferPolicy), obj(tx, args.transferRequest)],
  });
}
