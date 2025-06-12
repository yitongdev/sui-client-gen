import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

export interface ReceiveArgs {
  uid: TransactionObjectInput;
  receiving: TransactionObjectInput;
}

/**
 * Move function: `receive`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::transfer`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param uid - Function parameter
 * @param receiving - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function receive(tx: Transaction, typeArg: string, args: ReceiveArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::transfer::receive`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.uid), obj(tx, args.receiving)],
  });
}
