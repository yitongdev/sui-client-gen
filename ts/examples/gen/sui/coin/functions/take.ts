import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface TakeArgs {
  balance: TransactionObjectInput;
  value: bigint | TransactionArgument;
}

/**
 * Move function: `take`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::coin`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param balance - Function parameter
 * @param value - Function parameter
 * @param ctx - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function take(tx: Transaction, typeArg: string, args: TakeArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::coin::take`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.balance), pure(tx, args.value, `u64`)],
  });
}
