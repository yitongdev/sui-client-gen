import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

/**
 * Move function: `length`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::bag`
 *
 * @param tx - The transaction object
 * @param bag - Function parameter
 */
export function length(tx: Transaction, bag: TransactionObjectInput) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::bag::length`,
    arguments: [obj(tx, bag)],
  });
}
