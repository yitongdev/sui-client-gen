import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `destroy_empty`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::object_bag`
 *
 * @param tx - The transaction object
 * @param bag - Function parameter
 */
export function destroyEmpty(
  tx: Transaction,
  bag: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::object_bag::destroy_empty`,
    arguments: [obj(tx, bag)],
  });
}
