import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

export interface JoinFeesArgs {
  reserve: TransactionObjectInput;
  balance: TransactionObjectInput;
}

/**
 * Move function: `join_fees`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::reserve`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @param tx - The transaction object
 * @param reserve - Function parameter
 * @param balance - Function parameter
 */
export function joinFees(
  tx: Transaction,
  typeArgs: [string, string],
  args: JoinFeesArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::reserve::join_fees`,
    typeArguments: typeArgs,
    arguments: [obj(tx, args.reserve), obj(tx, args.balance)],
  });
}
