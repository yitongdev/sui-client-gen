import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `pool_admin_fee_value`
 * Module: `f917eb03d02b9221b10276064b2c10296276cb43feb24aac35113a272dd691c7::pool`
 *
 * @typeParam A - Type parameter 0
 * @typeParam B - Type parameter 1
 * @param tx - The transaction object
 * @param pool - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function poolAdminFeeValue(
  tx: Transaction,
  typeArgs: [string, string],
  pool: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::pool::pool_admin_fee_value`,
    typeArguments: typeArgs,
    arguments: [obj(tx, pool)],
  });
}
