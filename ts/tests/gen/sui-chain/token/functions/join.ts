import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

export interface JoinArgs {
  token1: TransactionObjectInput;
  token2: TransactionObjectInput;
}

/**
 * Move function: `join`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::token`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param token1 - Function parameter
 * @param token2 - Function parameter
 */
export function join(tx: Transaction, typeArg: string, args: JoinArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::token::join`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.token1), obj(tx, args.token2)],
  });
}
