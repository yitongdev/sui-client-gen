import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface MaxBorrowAmountArgs {
  rateLimiter: TransactionObjectInput;
  obligation: TransactionObjectInput;
  reserve: TransactionObjectInput;
  clock: TransactionObjectInput;
}

/**
 * Move function: `max_borrow_amount`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::lending_market`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param rateLimiter - Function parameter
 * @param obligation - Function parameter
 * @param reserve - Function parameter
 * @param clock - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function maxBorrowAmount(
  tx: Transaction,
  typeArg: string,
  args: MaxBorrowAmountArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::lending_market::max_borrow_amount`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.rateLimiter),
      obj(tx, args.obligation),
      obj(tx, args.reserve),
      obj(tx, args.clock),
    ],
  });
}
