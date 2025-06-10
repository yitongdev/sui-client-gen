import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

export interface JoinArgs {
  self: TransactionObjectInput;
  balance: TransactionObjectInput;
}

/**
 * Move function: `join`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::balance`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param self - Function parameter
 * @param balance - Function parameter
 */
export function join(tx: Transaction, typeArg: string, args: JoinArgs) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::balance::join`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.self), obj(tx, args.balance)],
  });
}
