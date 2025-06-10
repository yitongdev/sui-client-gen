import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

/**
 * Move function: `version`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::versioned`
 *
 * @param tx - The transaction object
 * @param self - Function parameter
 */
export function version(tx: Transaction, self: TransactionObjectInput) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::versioned::version`,
    arguments: [obj(tx, self)],
  });
}
