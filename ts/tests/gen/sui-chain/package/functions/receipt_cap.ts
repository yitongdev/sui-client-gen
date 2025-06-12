import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `receipt_cap`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::package`
 *
 * @param tx - The transaction object
 * @param upgradeReceipt - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function receiptCap(
  tx: Transaction,
  upgradeReceipt: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::package::receipt_cap`,
    arguments: [obj(tx, upgradeReceipt)],
  });
}
