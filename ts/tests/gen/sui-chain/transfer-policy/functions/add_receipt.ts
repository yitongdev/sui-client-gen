import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

export interface AddReceiptArgs {
  t1: GenericArg;
  transferRequest: TransactionObjectInput;
}

/**
 * Move function: `add_receipt`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::transfer_policy`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @param tx - The transaction object
 * @param t1 - Function parameter
 * @param transferRequest - Function parameter
 */
export function addReceipt(
  tx: Transaction,
  typeArgs: [string, string],
  args: AddReceiptArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::transfer_policy::add_receipt`,
    typeArguments: typeArgs,
    arguments: [generic(tx, `${typeArgs[1]}`, args.t1), obj(tx, args.transferRequest)],
  });
}
