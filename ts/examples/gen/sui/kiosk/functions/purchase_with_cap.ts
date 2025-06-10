import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

export interface PurchaseWithCapArgs {
  self: TransactionObjectInput;
  purchaseCap: TransactionObjectInput;
  payment: TransactionObjectInput;
}

/**
 * Move function: `purchase_with_cap`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param self - Function parameter
 * @param purchaseCap - Function parameter
 * @param payment - Function parameter
 */
export function purchaseWithCap(
  tx: Transaction,
  typeArg: string,
  args: PurchaseWithCapArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::kiosk::purchase_with_cap`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.self),
      obj(tx, args.purchaseCap),
      obj(tx, args.payment),
    ],
  });
}
