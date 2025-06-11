import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface PutArgs {
  balance: TransactionObjectInput;
  coin: TransactionObjectInput;
}

/**
 * Move function: `put`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::coin`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param balance - Function parameter
 * @param coin - Function parameter
 */
export function put(
  tx: Transaction,
  typeArg: string,
  args: PutArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::coin::put`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.balance), obj(tx, args.coin)],
  });
}
