import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface SplitArgs {
  token: TransactionObjectInput;
  amount: bigint | TransactionArgument;
}

/**
 * Move function: `split`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::token`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param token - Function parameter
 * @param amount - Function parameter
 * @param ctx - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function split(tx: Transaction, typeArg: string, args: SplitArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::token::split`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.token), pure(tx, args.amount, `u64`)],
  });
}
