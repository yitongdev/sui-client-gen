import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

export interface BurnArgs {
  cap: TransactionObjectInput;
  c: TransactionObjectInput;
}

/**
 * Move function: `burn`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::coin`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param cap - Function parameter
 * @param c - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function burn(tx: Transaction, typeArg: string, args: BurnArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::coin::burn`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.cap), obj(tx, args.c)],
  });
}
