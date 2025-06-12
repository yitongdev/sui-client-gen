import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `receipt_package`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::package`
 *
 * @param tx - The transaction object
 * @param receipt - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function receiptPackage(
  tx: Transaction,
  receipt: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::package::receipt_package`,
    arguments: [obj(tx, receipt)],
  });
}
