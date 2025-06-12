import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface SplitArgs {
  self: TransactionObjectInput;
  value: bigint | TransactionArgument;
}

/**
 * Move function: `split`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::balance`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param self - Function parameter
 * @param value - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function split(tx: Transaction, typeArg: string, args: SplitArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::balance::split`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.self), pure(tx, args.value, `u64`)],
  });
}
