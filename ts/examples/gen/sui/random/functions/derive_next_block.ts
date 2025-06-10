import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

/**
 * Move function: `derive_next_block`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::random`
 *
 * @param tx - The transaction object
 * @param g - Function parameter
 */
export function deriveNextBlock(tx: Transaction, g: TransactionObjectInput) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::random::derive_next_block`,
    arguments: [obj(tx, g)],
  });
}
