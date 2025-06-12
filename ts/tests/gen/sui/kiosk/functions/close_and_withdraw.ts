import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

export interface CloseAndWithdrawArgs {
  self: TransactionObjectInput;
  cap: TransactionObjectInput;
}

/**
 * Move function: `close_and_withdraw`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk`
 *
 * @param tx - The transaction object
 * @param self - Function parameter
 * @param cap - Function parameter
 * @param ctx - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function closeAndWithdraw(tx: Transaction, args: CloseAndWithdrawArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::kiosk::close_and_withdraw`,
    arguments: [obj(tx, args.self), obj(tx, args.cap)],
  });
}
