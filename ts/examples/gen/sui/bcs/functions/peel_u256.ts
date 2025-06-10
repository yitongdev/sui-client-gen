import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

/**
 * Move function: `peel_u256`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::bcs`
 *
 * @param tx - The transaction object
 * @param bcs - Function parameter
 */
export function peelU256(tx: Transaction, bcs: TransactionObjectInput) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::bcs::peel_u256`,
    arguments: [obj(tx, bcs)],
  });
}
