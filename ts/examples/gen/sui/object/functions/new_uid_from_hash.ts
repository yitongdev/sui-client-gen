import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument } from "@mysten/sui/transactions";

/**
 * Move function: `new_uid_from_hash`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::object`
 *
 * @param tx - The transaction object
 * @param bytes - Function parameter
 */
export function newUidFromHash(
  tx: Transaction,
  bytes: string | TransactionArgument,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::object::new_uid_from_hash`,
    arguments: [pure(tx, bytes, `address`)],
  });
}
