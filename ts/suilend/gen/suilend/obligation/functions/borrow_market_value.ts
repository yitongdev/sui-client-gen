import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `borrow_market_value`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::obligation`
 *
 * @param tx - The transaction object
 * @param borrow - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function borrowMarketValue(
  tx: Transaction,
  borrow: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::obligation::borrow_market_value`,
    arguments: [obj(tx, borrow)],
  });
}
