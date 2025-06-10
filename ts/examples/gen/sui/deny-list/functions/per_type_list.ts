import { PUBLISHED_AT } from "../../constants.js";
import { Transaction } from "@mysten/sui/transactions";

/**
 * Move function: `per_type_list`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::deny_list`
 *
 * @param tx - The transaction object
 * @param ctx - Function parameter
 */
export function perTypeList(tx: Transaction) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::deny_list::per_type_list`,
    arguments: [],
  });
}
