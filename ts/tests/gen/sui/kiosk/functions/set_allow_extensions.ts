import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface SetAllowExtensionsArgs {
  self: TransactionObjectInput;
  cap: TransactionObjectInput;
  allowExtensions: boolean | TransactionArgument;
}

/**
 * Move function: `set_allow_extensions`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk`
 *
 * @param tx - The transaction object
 * @param self - Function parameter
 * @param cap - Function parameter
 * @param allowExtensions - Function parameter
 */
export function setAllowExtensions(
  tx: Transaction,
  args: SetAllowExtensionsArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::kiosk::set_allow_extensions`,
    arguments: [
      obj(tx, args.self),
      obj(tx, args.cap),
      pure(tx, args.allowExtensions, `bool`),
    ],
  });
}
