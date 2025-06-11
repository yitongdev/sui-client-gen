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
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param kiosk - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function canLock(
  tx: Transaction,
  typeArg: string,
  kiosk: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::kiosk_extension::can_lock`,
    typeArguments: [typeArg],
    arguments: [obj(tx, kiosk)],
  });
}
