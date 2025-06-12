import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `to_fee_config`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::fees`
 *
 * @param tx - The transaction object
 * @param feeConfigBuilder - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function toFeeConfig(
  tx: Transaction,
  feeConfigBuilder: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::fees::to_fee_config`,
    arguments: [obj(tx, feeConfigBuilder)],
  });
}
