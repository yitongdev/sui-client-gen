import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `parse_price_to_decimal`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::oracles`
 *
 * @param tx - The transaction object
 * @param price - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function parsePriceToDecimal(
  tx: Transaction,
  price: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::oracles::parse_price_to_decimal`,
    arguments: [obj(tx, price)],
  });
}
