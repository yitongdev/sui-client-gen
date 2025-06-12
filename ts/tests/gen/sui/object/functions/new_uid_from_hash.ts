import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `new_uid_from_hash`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::object`
 *
 * @param tx - The transaction object
 * @param bytes - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function newUidFromHash(
  tx: Transaction,
  bytes: string | TransactionArgument,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::object::new_uid_from_hash`,
    arguments: [pure(tx, bytes, `address`)],
  });
}
