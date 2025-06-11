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
  u64: bigint | TransactionArgument;
}

/**
 * Move function: `split`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::token`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param token - Function parameter
 * @param u64 - Function parameter
 * @param txContext - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function split(
  tx: Transaction,
  typeArg: string,
  args: SplitArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::token::split`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.token), pure(tx, args.u64, `u64`)],
  });
}
