import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `purchase_cap_min_price`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param purchaseCap - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function purchaseCapMinPrice(
  tx: Transaction,
  typeArg: string,
  purchaseCap: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::kiosk::purchase_cap_min_price`,
    typeArguments: [typeArg],
    arguments: [obj(tx, purchaseCap)],
  });
}
