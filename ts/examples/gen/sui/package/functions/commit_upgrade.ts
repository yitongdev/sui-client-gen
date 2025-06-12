import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

export interface CommitUpgradeArgs {
  cap: TransactionObjectInput;
  receipt: TransactionObjectInput;
}

/**
 * Move function: `commit_upgrade`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::package`
 *
 * @param tx - The transaction object
 * @param cap - Function parameter
 * @param receipt - Function parameter
 */
export function commitUpgrade(tx: Transaction, args: CommitUpgradeArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::package::commit_upgrade`,
    arguments: [obj(tx, args.cap), obj(tx, args.receipt)],
  });
}
