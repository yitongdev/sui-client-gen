import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface BorrowRequestArgs {
  lendingMarket: TransactionObjectInput;
  u641: bigint | TransactionArgument;
  obligationOwnerCap: TransactionObjectInput;
  clock: TransactionObjectInput;
  u642: bigint | TransactionArgument;
}

/**
 * Move function: `borrow_request`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::lending_market`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @param tx - The transaction object
 * @param lendingMarket - Function parameter
 * @param u641 - Function parameter
 * @param obligationOwnerCap - Function parameter
 * @param clock - Function parameter
 * @param u642 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function borrowRequest(
  tx: Transaction,
  typeArgs: [string, string],
  args: BorrowRequestArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::lending_market::borrow_request`,
    typeArguments: typeArgs,
    arguments: [
      obj(tx, args.lendingMarket),
      pure(tx, args.u641, `u64`),
      obj(tx, args.obligationOwnerCap),
      obj(tx, args.clock),
      pure(tx, args.u642, `u64`),
    ],
  });
}
