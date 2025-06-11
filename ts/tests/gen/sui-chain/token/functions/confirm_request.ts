import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface ConfirmRequestArgs {
  tokenPolicy: TransactionObjectInput;
  actionRequest: TransactionObjectInput;
}

/**
 * Move function: `confirm_request`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::token`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param tokenPolicy - Function parameter
 * @param actionRequest - Function parameter
 * @param txContext - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function confirmRequest(
  tx: Transaction,
  typeArg: string,
  args: ConfirmRequestArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::token::confirm_request`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.tokenPolicy), obj(tx, args.actionRequest)],
  });
}
