import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

/**
 * Move function: `load_inner`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::random`
 *
 * @param tx - The transaction object
 * @param self - Function parameter
 */
export function loadInner(tx: Transaction, self: TransactionObjectInput) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::random::load_inner`,
    arguments: [obj(tx, self)],
  });
}
