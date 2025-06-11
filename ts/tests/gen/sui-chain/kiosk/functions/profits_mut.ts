import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface ProfitsMutArgs {
  kiosk: TransactionObjectInput;
  kioskOwnerCap: TransactionObjectInput;
}

/**
 * Move function: `profits_mut`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk`
 *
 * @param tx - The transaction object
 * @param kiosk - Function parameter
 * @param kioskOwnerCap - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function profitsMut(
  tx: Transaction,
  args: ProfitsMutArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::kiosk::profits_mut`,
    arguments: [obj(tx, args.kiosk), obj(tx, args.kioskOwnerCap)],
  });
}
