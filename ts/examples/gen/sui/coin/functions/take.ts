import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
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
 */
export function take(tx: Transaction, typeArg: string, args: TakeArgs) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::coin::take`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.balance), pure(tx, args.value, `u64`)],
  });
}
