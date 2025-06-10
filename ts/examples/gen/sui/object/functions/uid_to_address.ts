import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

/**
 * Move function: `uid_to_address`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::object`
 *
 * @param tx - The transaction object
 * @param uid - Function parameter
 */
export function uidToAddress(tx: Transaction, uid: TransactionObjectInput) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::object::uid_to_address`,
    arguments: [obj(tx, uid)],
  });
}
