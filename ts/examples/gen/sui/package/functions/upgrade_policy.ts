import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

/**
 * Move function: `upgrade_policy`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::package`
 *
 * @param tx - The transaction object
 * @param cap - Function parameter
 */
export function upgradePolicy(tx: Transaction, cap: TransactionObjectInput) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::package::upgrade_policy`,
    arguments: [obj(tx, cap)],
  });
}
