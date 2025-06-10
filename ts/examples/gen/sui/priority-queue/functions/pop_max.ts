import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

/**
 * Move function: `pop_max`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::priority_queue`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param pq - Function parameter
 */
export function popMax(
  tx: Transaction,
  typeArg: string,
  pq: TransactionObjectInput,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::priority_queue::pop_max`,
    typeArguments: [typeArg],
    arguments: [obj(tx, pq)],
  });
}
