import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

export interface UsdToTokenAmountUpperBoundArgs {
  reserve: TransactionObjectInput;
  decimal: TransactionObjectInput;
}

/**
 * Move function: `usd_to_token_amount_upper_bound`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::reserve`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param reserve - Function parameter
 * @param decimal - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function usdToTokenAmountUpperBound(
  tx: Transaction,
  typeArg: string,
  args: UsdToTokenAmountUpperBoundArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::reserve::usd_to_token_amount_upper_bound`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.reserve), obj(tx, args.decimal)],
  });
}
