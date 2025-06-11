import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `can_lock`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk_extension`
 *
 * @typeParam Ext - Type parameter 0
 * @param tx - The transaction object
 * @param self - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function canLock(
  tx: Transaction,
  typeArg: string,
  self: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::kiosk_extension::can_lock`,
    typeArguments: [typeArg],
    arguments: [obj(tx, self)],
  });
}
