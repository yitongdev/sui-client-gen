import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

export interface CommitUpgradeArgs {
  upgradeCap: TransactionObjectInput;
  upgradeReceipt: TransactionObjectInput;
}

/**
 * Move function: `commit_upgrade`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::package`
 *
 * @param tx - The transaction object
 * @param upgradeCap - Function parameter
 * @param upgradeReceipt - Function parameter
 */
export function commitUpgrade(tx: Transaction, args: CommitUpgradeArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::package::commit_upgrade`,
    arguments: [obj(tx, args.upgradeCap), obj(tx, args.upgradeReceipt)],
  });
}
