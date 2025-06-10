import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

/**
 * Move function: `owner`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::zklogin_verified_id`
 *
 * @param tx - The transaction object
 * @param verifiedId - Function parameter
 */
export function owner(tx: Transaction, verifiedId: TransactionObjectInput) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::zklogin_verified_id::owner`,
    arguments: [obj(tx, verifiedId)],
  });
}
