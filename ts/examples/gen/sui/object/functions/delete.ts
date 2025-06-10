import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

/**
 * Move function: `delete`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::object`
 *
 * @param tx - The transaction object
 * @param id - Function parameter
 */
export function delete_(tx: Transaction, id: TransactionObjectInput) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::object::delete`,
    arguments: [obj(tx, id)],
  });
}
