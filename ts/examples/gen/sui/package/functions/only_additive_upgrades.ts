import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

/**
 * Move function: `only_additive_upgrades`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::package`
 *
 * @param tx - The transaction object
 * @param cap - Function parameter
 */
export function onlyAdditiveUpgrades(
  tx: Transaction,
  cap: TransactionObjectInput,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::package::only_additive_upgrades`,
    arguments: [obj(tx, cap)],
  });
}
