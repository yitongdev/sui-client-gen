import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

export interface AddReceiptArgs {
  rule: GenericArg;
  request: TransactionObjectInput;
}

/**
 * Move function: `add_receipt`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::transfer_policy`
 *
 * @typeParam T - Type parameter 0
 * @typeParam Rule - Type parameter 1
 * @param tx - The transaction object
 * @param rule - Function parameter
 * @param request - Function parameter
 */
export function addReceipt(
  tx: Transaction,
  typeArgs: [string, string],
  args: AddReceiptArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::transfer_policy::add_receipt`,
    typeArguments: typeArgs,
    arguments: [
      generic(tx, `${typeArgs[1]}`, args.rule),
      obj(tx, args.request),
    ],
  });
}
