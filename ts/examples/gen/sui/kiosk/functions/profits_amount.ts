import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

/**
 * Move function: `profits_amount`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk`
 *
 * @param tx - The transaction object
 * @param self - Function parameter
 */
export function profitsAmount(tx: Transaction, self: TransactionObjectInput) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::kiosk::profits_amount`,
    arguments: [obj(tx, self)],
  });
}
