import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface SetAllowExtensionsArgs {
  kiosk: TransactionObjectInput;
  kioskOwnerCap: TransactionObjectInput;
  bool: boolean | TransactionArgument;
}

/**
 * Move function: `set_allow_extensions`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk`
 *
 * @param tx - The transaction object
 * @param kiosk - Function parameter
 * @param kioskOwnerCap - Function parameter
 * @param bool - Function parameter
 */
export function setAllowExtensions(
  tx: Transaction,
  args: SetAllowExtensionsArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::kiosk::set_allow_extensions`,
    arguments: [obj(tx, args.kiosk), obj(tx, args.kioskOwnerCap), pure(tx, args.bool, `bool`)],
  });
}
