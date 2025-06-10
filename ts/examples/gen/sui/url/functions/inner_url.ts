import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

/**
 * Move function: `inner_url`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::url`
 *
 * @param tx - The transaction object
 * @param self - Function parameter
 */
export function innerUrl(tx: Transaction, self: TransactionObjectInput) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::url::inner_url`,
    arguments: [obj(tx, self)],
  });
}
