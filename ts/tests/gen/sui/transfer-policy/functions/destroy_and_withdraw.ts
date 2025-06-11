import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface DestroyAndWithdrawArgs {
  self: TransactionObjectInput;
  cap: TransactionObjectInput;
}

/**
 * Move function: `destroy_and_withdraw`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::transfer_policy`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param self - Function parameter
 * @param cap - Function parameter
 * @param ctx - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function destroyAndWithdraw(
  tx: Transaction,
  typeArg: string,
  args: DestroyAndWithdrawArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::transfer_policy::destroy_and_withdraw`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.self), obj(tx, args.cap)],
  });
}
