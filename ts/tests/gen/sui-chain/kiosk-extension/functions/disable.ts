import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface DisableArgs {
  kiosk: TransactionObjectInput;
  kioskOwnerCap: TransactionObjectInput;
}

/**
 * Move function: `disable`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk_extension`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param kiosk - Function parameter
 * @param kioskOwnerCap - Function parameter
 */
export function disable(
  tx: Transaction,
  typeArg: string,
  args: DisableArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::kiosk_extension::disable`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.kiosk), obj(tx, args.kioskOwnerCap)],
  });
}
