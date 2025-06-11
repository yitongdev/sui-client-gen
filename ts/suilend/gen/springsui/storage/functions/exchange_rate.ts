import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `exchange_rate`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::storage`
 *
 * @param tx - The transaction object
 * @param validatorInfo - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function exchangeRate(
  tx: Transaction,
  validatorInfo: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::storage::exchange_rate`,
    arguments: [obj(tx, validatorInfo)],
  });
}
