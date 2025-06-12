import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface MintArgs {
  cap: TransactionObjectInput;
  value: bigint | TransactionArgument;
}

/**
 * Move function: `mint`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::coin`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param cap - Function parameter
 * @param value - Function parameter
 * @param ctx - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function mint(tx: Transaction, typeArg: string, args: MintArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::coin::mint`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.cap), pure(tx, args.value, `u64`)],
  });
}
