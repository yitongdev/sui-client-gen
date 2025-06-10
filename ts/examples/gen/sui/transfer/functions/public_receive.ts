import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

export interface PublicReceiveArgs {
  parent: TransactionObjectInput;
  toReceive: TransactionObjectInput;
}

/**
 * Move function: `public_receive`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::transfer`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param parent - Function parameter
 * @param toReceive - Function parameter
 */
export function publicReceive(
  tx: Transaction,
  typeArg: string,
  args: PublicReceiveArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::transfer::public_receive`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.parent), obj(tx, args.toReceive)],
  });
}
