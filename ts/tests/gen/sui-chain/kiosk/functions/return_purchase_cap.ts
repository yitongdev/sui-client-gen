import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

export interface ReturnPurchaseCapArgs {
  kiosk: TransactionObjectInput;
  purchaseCap: TransactionObjectInput;
}

/**
 * Move function: `return_purchase_cap`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param kiosk - Function parameter
 * @param purchaseCap - Function parameter
 */
export function returnPurchaseCap(
  tx: Transaction,
  typeArg: string,
  args: ReturnPurchaseCapArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::kiosk::return_purchase_cap`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.kiosk), obj(tx, args.purchaseCap)],
  });
}
