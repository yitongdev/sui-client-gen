import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

export interface PurchaseWithCapArgs {
  kiosk: TransactionObjectInput;
  purchaseCap: TransactionObjectInput;
  coin: TransactionObjectInput;
}

/**
 * Move function: `purchase_with_cap`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param kiosk - Function parameter
 * @param purchaseCap - Function parameter
 * @param coin - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function purchaseWithCap(
  tx: Transaction,
  typeArg: string,
  args: PurchaseWithCapArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::kiosk::purchase_with_cap`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.kiosk), obj(tx, args.purchaseCap), obj(tx, args.coin)],
  });
}
