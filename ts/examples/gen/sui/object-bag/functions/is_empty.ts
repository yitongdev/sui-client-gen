import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

/**
 * Move function: `is_empty`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::object_bag`
 *
 * @param tx - The transaction object
 * @param bag - Function parameter
 */
export function isEmpty(tx: Transaction, bag: TransactionObjectInput) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::object_bag::is_empty`,
    arguments: [obj(tx, bag)],
  });
}
