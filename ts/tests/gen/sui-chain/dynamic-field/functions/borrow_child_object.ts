import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface BorrowChildObjectArgs {
  uid: TransactionObjectInput;
  address: string | TransactionArgument;
}

/**
 * Move function: `borrow_child_object`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::dynamic_field`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param uid - Function parameter
 * @param address - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function borrowChildObject(
  tx: Transaction,
  typeArg: string,
  args: BorrowChildObjectArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::dynamic_field::borrow_child_object`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.uid), pure(tx, args.address, `address`)],
  });
}
