import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

export interface JoinToSuiPoolArgs {
  storage: TransactionObjectInput;
  balance: TransactionObjectInput;
}

/**
 * Move function: `join_to_sui_pool`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::storage`
 *
 * @param tx - The transaction object
 * @param storage - Function parameter
 * @param balance - Function parameter
 */
export function joinToSuiPool(tx: Transaction, args: JoinToSuiPoolArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::storage::join_to_sui_pool`,
    arguments: [obj(tx, args.storage), obj(tx, args.balance)],
  });
}
