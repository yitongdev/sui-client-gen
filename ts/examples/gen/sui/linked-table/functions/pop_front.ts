import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

/**
 * Move function: `pop_front`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::linked_table`
 *
 * @typeParam K - Type parameter 0
 * @typeParam V - Type parameter 1
 * @param tx - The transaction object
 * @param table - Function parameter
 */
export function popFront(
  tx: Transaction,
  typeArgs: [string, string],
  table: TransactionObjectInput,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::linked_table::pop_front`,
    typeArguments: typeArgs,
    arguments: [obj(tx, table)],
  });
}
