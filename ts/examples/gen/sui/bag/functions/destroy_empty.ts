import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

/**
 * Move function: `destroy_empty`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::bag`
 *
 * @param tx - The transaction object
 * @param bag - Function parameter
 */
export function destroyEmpty(tx: Transaction, bag: TransactionObjectInput) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::bag::destroy_empty`,
    arguments: [obj(tx, bag)],
  });
}
