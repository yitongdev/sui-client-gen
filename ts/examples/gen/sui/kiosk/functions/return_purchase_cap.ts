import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

export interface ReturnPurchaseCapArgs {
  self: TransactionObjectInput;
  purchaseCap: TransactionObjectInput;
}

/**
 * Move function: `return_purchase_cap`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param self - Function parameter
 * @param purchaseCap - Function parameter
 */
export function returnPurchaseCap(
  tx: Transaction,
  typeArg: string,
  args: ReturnPurchaseCapArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::kiosk::return_purchase_cap`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.self), obj(tx, args.purchaseCap)],
  });
}
