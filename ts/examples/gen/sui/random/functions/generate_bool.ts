import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

/**
 * Move function: `generate_bool`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::random`
 *
 * @param tx - The transaction object
 * @param g - Function parameter
 */
export function generateBool(tx: Transaction, g: TransactionObjectInput) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::random::generate_bool`,
    arguments: [obj(tx, g)],
  });
}
