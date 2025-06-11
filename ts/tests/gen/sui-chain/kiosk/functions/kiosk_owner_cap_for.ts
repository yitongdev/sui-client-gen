import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `kiosk_owner_cap_for`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk`
 *
 * @param tx - The transaction object
 * @param kioskOwnerCap - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function kioskOwnerCapFor(
  tx: Transaction,
  kioskOwnerCap: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::kiosk::kiosk_owner_cap_for`,
    arguments: [obj(tx, kioskOwnerCap)],
  });
}
