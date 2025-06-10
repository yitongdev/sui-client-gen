import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

/**
 * Move function: `purchase_cap_item`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param self - Function parameter
 */
export function purchaseCapItem(
  tx: Transaction,
  typeArg: string,
  self: TransactionObjectInput,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::kiosk::purchase_cap_item`,
    typeArguments: [typeArg],
    arguments: [obj(tx, self)],
  });
}
