import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface SplitAndTransferArgs {
  c: TransactionObjectInput;
  amount: bigint | TransactionArgument;
  recipient: string | TransactionArgument;
}

/**
 * Move function: `split_and_transfer`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::pay`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param c - Function parameter
 * @param amount - Function parameter
 * @param recipient - Function parameter
 * @param ctx - Function parameter
 */
export function splitAndTransfer(
  tx: Transaction,
  typeArg: string,
  args: SplitAndTransferArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::pay::split_and_transfer`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.c), pure(tx, args.amount, `u64`), pure(tx, args.recipient, `address`)],
  });
}
