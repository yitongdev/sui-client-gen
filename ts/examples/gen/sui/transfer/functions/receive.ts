import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

export interface ReceiveArgs {
  parent: TransactionObjectInput;
  toReceive: TransactionObjectInput;
}

/**
 * Move function: `receive`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::transfer`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param parent - Function parameter
 * @param toReceive - Function parameter
 */
export function receive(tx: Transaction, typeArg: string, args: ReceiveArgs) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::transfer::receive`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.parent), obj(tx, args.toReceive)],
  });
}
