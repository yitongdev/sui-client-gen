import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `liquidity_request_fee`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::reserve`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @param tx - The transaction object
 * @param liquidityRequest - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function liquidityRequestFee(
  tx: Transaction,
  typeArgs: [string, string],
  liquidityRequest: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::reserve::liquidity_request_fee`,
    typeArguments: typeArgs,
    arguments: [obj(tx, liquidityRequest)],
  });
}
