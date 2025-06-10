import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument } from "@mysten/sui/transactions";

/**
 * Move function: `to_string`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::address`
 *
 * @param tx - The transaction object
 * @param a - Function parameter
 */
export function toString(tx: Transaction, a: string | TransactionArgument) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::address::to_string`,
    arguments: [pure(tx, a, `address`)],
  });
}
