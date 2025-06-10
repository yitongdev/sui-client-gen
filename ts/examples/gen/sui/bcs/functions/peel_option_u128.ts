import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

/**
 * Move function: `peel_option_u128`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::bcs`
 *
 * @param tx - The transaction object
 * @param bcs - Function parameter
 */
export function peelOptionU128(tx: Transaction, bcs: TransactionObjectInput) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::bcs::peel_option_u128`,
    arguments: [obj(tx, bcs)],
  });
}
