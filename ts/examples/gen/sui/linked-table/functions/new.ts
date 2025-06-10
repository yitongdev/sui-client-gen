import { PUBLISHED_AT } from "../../constants.js";
import { Transaction } from "@mysten/sui/transactions";

/**
 * Move function: `new`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::linked_table`
 *
 * @typeParam K - Type parameter 0
 * @typeParam V - Type parameter 1
 * @param tx - The transaction object
 * @param ctx - Function parameter
 */
export function new_(tx: Transaction, typeArgs: [string, string]) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::linked_table::new`,
    typeArguments: typeArgs,
    arguments: [],
  });
}
