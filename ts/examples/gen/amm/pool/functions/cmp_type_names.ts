import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

export interface CmpTypeNamesArgs {
  a: TransactionObjectInput;
  b: TransactionObjectInput;
}

/**
 * Move function: `cmp_type_names`
 * Module: `f917eb03d02b9221b10276064b2c10296276cb43feb24aac35113a272dd691c7::pool`
 *
 * @param tx - The transaction object
 * @param a - Function parameter
 * @param b - Function parameter
 */
export function cmpTypeNames(tx: Transaction, args: CmpTypeNamesArgs) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::pool::cmp_type_names`,
    arguments: [obj(tx, args.a), obj(tx, args.b)],
  });
}
