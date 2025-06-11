import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `uid_to_bytes`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::object`
 *
 * @param tx - The transaction object
 * @param uid - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function uidToBytes(
  tx: Transaction,
  uid: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::object::uid_to_bytes`,
    arguments: [obj(tx, uid)],
  });
}
