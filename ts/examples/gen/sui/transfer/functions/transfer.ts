import { GenericArg, generic, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument } from "@mysten/sui/transactions";

export interface TransferArgs {
  obj: GenericArg;
  recipient: string | TransactionArgument;
}

/**
 * Move function: `transfer`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::transfer`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param obj - Function parameter
 * @param recipient - Function parameter
 */
export function transfer(tx: Transaction, typeArg: string, args: TransferArgs) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::transfer::transfer`,
    typeArguments: [typeArg],
    arguments: [
      generic(tx, `${typeArg}`, args.obj),
      pure(tx, args.recipient, `address`),
    ],
  });
}
