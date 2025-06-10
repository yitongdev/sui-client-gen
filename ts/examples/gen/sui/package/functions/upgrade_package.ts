import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

/**
 * Move function: `upgrade_package`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::package`
 *
 * @param tx - The transaction object
 * @param cap - Function parameter
 */
export function upgradePackage(tx: Transaction, cap: TransactionObjectInput) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::package::upgrade_package`,
    arguments: [obj(tx, cap)],
  });
}
