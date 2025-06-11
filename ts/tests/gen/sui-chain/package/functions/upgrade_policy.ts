import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `upgrade_policy`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::package`
 *
 * @param tx - The transaction object
 * @param upgradeCap - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function upgradePolicy(
  tx: Transaction,
  upgradeCap: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::package::upgrade_policy`,
    arguments: [obj(tx, upgradeCap)],
  });
}
