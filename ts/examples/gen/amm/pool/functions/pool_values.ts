import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

/**
 * Move function: `pool_values`
 * Module: `f917eb03d02b9221b10276064b2c10296276cb43feb24aac35113a272dd691c7::pool`
 *
 * @typeParam A - Type parameter 0
 * @typeParam B - Type parameter 1
 * @param tx - The transaction object
 * @param pool - Function parameter
 */
export function poolValues(
  tx: Transaction,
  typeArgs: [string, string],
  pool: TransactionObjectInput,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::pool::pool_values`,
    typeArguments: typeArgs,
    arguments: [obj(tx, pool)],
  });
}
