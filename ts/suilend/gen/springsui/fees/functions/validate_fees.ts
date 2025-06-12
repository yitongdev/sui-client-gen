import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `validate_fees`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::fees`
 *
 * @param tx - The transaction object
 * @param feeConfig - Function parameter
 */
export function validateFees(
  tx: Transaction,
  feeConfig: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::fees::validate_fees`,
    arguments: [obj(tx, feeConfig)],
  });
}
