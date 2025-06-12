import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

export interface JoinArgs {
  coin1: TransactionObjectInput;
  coin2: TransactionObjectInput;
}

/**
 * Move function: `join`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::coin`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param coin1 - Function parameter
 * @param coin2 - Function parameter
 */
export function join(tx: Transaction, typeArg: string, args: JoinArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::coin::join`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.coin1), obj(tx, args.coin2)],
  });
}
