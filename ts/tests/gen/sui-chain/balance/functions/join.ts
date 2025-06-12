import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

export interface JoinArgs {
  balance1: TransactionObjectInput;
  balance2: TransactionObjectInput;
}

/**
 * Move function: `join`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::balance`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param balance1 - Function parameter
 * @param balance2 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function join(tx: Transaction, typeArg: string, args: JoinArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::balance::join`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.balance1), obj(tx, args.balance2)],
  });
}
