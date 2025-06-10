import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument } from "@mysten/sui/transactions";

/**
 * Move function: `from_u256`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::address`
 *
 * @param tx - The transaction object
 * @param n - Function parameter
 */
export function fromU256(tx: Transaction, n: bigint | TransactionArgument) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::address::from_u256`,
    arguments: [pure(tx, n, `u256`)],
  });
}
