import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

/**
 * Move function: `make_immutable`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::package`
 *
 * @param tx - The transaction object
 * @param cap - Function parameter
 */
export function makeImmutable(tx: Transaction, cap: TransactionObjectInput) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::package::make_immutable`,
    arguments: [obj(tx, cap)],
  });
}
