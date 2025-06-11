import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `deposit_deposited_ctoken_amount`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::obligation`
 *
 * @param tx - The transaction object
 * @param deposit - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function depositDepositedCtokenAmount(
  tx: Transaction,
  deposit: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::obligation::deposit_deposited_ctoken_amount`,
    arguments: [obj(tx, deposit)],
  });
}
