import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

export interface ProfitsMutArgs {
  self: TransactionObjectInput;
  cap: TransactionObjectInput;
}

/**
 * Move function: `profits_mut`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk`
 *
 * @param tx - The transaction object
 * @param self - Function parameter
 * @param cap - Function parameter
 */
export function profitsMut(tx: Transaction, args: ProfitsMutArgs) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::kiosk::profits_mut`,
    arguments: [obj(tx, args.self), obj(tx, args.cap)],
  });
}
