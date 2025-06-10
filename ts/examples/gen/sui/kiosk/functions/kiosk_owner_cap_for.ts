import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

/**
 * Move function: `kiosk_owner_cap_for`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk`
 *
 * @param tx - The transaction object
 * @param cap - Function parameter
 */
export function kioskOwnerCapFor(tx: Transaction, cap: TransactionObjectInput) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::kiosk::kiosk_owner_cap_for`,
    arguments: [obj(tx, cap)],
  });
}
