import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

/**
 * Move function: `destroy_empty`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::table_vec`
 *
 * @typeParam Element - Type parameter 0
 * @param tx - The transaction object
 * @param t - Function parameter
 */
export function destroyEmpty(
  tx: Transaction,
  typeArg: string,
  t: TransactionObjectInput,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::table_vec::destroy_empty`,
    typeArguments: [typeArg],
    arguments: [obj(tx, t)],
  });
}
