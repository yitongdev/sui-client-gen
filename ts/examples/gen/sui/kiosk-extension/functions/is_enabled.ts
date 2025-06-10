import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

/**
 * Move function: `is_enabled`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk_extension`
 *
 * @typeParam Ext - Type parameter 0
 * @param tx - The transaction object
 * @param self - Function parameter
 */
export function isEnabled(
  tx: Transaction,
  typeArg: string,
  self: TransactionObjectInput,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::kiosk_extension::is_enabled`,
    typeArguments: [typeArg],
    arguments: [obj(tx, self)],
  });
}
