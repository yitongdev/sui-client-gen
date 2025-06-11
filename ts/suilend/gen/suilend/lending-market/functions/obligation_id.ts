import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `obligation_id`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::lending_market`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param obligationOwnerCap - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function obligationId(
  tx: Transaction,
  typeArg: string,
  obligationOwnerCap: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::lending_market::obligation_id`,
    typeArguments: [typeArg],
    arguments: [obj(tx, obligationOwnerCap)],
  });
}
