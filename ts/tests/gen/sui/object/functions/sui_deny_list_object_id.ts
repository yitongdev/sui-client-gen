import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `sui_deny_list_object_id`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::object`
 *
 * @param tx - The transaction object
 * @returns TransactionResult - The transaction result
 */
export function suiDenyListObjectId(tx: Transaction): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::object::sui_deny_list_object_id`,
    arguments: [],
  });
}
