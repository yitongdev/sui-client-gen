import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

export interface JoinArgs {
  token: TransactionObjectInput;
  another: TransactionObjectInput;
}

/**
 * Move function: `join`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::token`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param token - Function parameter
 * @param another - Function parameter
 */
export function join(tx: Transaction, typeArg: string, args: JoinArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::token::join`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.token), obj(tx, args.another)],
  });
}
