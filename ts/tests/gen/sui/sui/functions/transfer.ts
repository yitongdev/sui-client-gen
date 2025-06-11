import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface TransferArgs {
  c: TransactionObjectInput;
  recipient: string | TransactionArgument;
}

/**
 * Move function: `transfer`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::sui`
 *
 * @param tx - The transaction object
 * @param c - Function parameter
 * @param recipient - Function parameter
 */
export function transfer(
  tx: Transaction,
  args: TransferArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::sui::transfer`,
    arguments: [obj(tx, args.c), pure(tx, args.recipient, `address`)],
  });
}
