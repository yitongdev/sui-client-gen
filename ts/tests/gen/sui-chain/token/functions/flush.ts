import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

export interface FlushArgs {
  tokenPolicy: TransactionObjectInput;
  treasuryCap: TransactionObjectInput;
}

/**
 * Move function: `flush`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::token`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param tokenPolicy - Function parameter
 * @param treasuryCap - Function parameter
 * @param txContext - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function flush(tx: Transaction, typeArg: string, args: FlushArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::token::flush`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.tokenPolicy), obj(tx, args.treasuryCap)],
  });
}
