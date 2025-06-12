import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

export interface FindOrAddDepositArgs {
  obligation: TransactionObjectInput;
  reserve: TransactionObjectInput;
  clock: TransactionObjectInput;
}

/**
 * Move function: `find_or_add_deposit`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::obligation`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param obligation - Function parameter
 * @param reserve - Function parameter
 * @param clock - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function findOrAddDeposit(
  tx: Transaction,
  typeArg: string,
  args: FindOrAddDepositArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::obligation::find_or_add_deposit`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.obligation), obj(tx, args.reserve), obj(tx, args.clock)],
  });
}
