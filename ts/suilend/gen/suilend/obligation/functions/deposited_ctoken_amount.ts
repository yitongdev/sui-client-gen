import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `deposited_ctoken_amount`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::obligation`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @param tx - The transaction object
 * @param obligation - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function depositedCtokenAmount(
  tx: Transaction,
  typeArgs: [string, string],
  obligation: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::obligation::deposited_ctoken_amount`,
    typeArguments: typeArgs,
    arguments: [obj(tx, obligation)],
  });
}
