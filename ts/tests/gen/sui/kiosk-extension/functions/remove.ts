import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface RemoveArgs {
  self: TransactionObjectInput;
  cap: TransactionObjectInput;
}

/**
 * Move function: `remove`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk_extension`
 *
 * @typeParam Ext - Type parameter 0
 * @param tx - The transaction object
 * @param self - Function parameter
 * @param cap - Function parameter
 */
export function remove(
  tx: Transaction,
  typeArg: string,
  args: RemoveArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::kiosk_extension::remove`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.self), obj(tx, args.cap)],
  });
}
