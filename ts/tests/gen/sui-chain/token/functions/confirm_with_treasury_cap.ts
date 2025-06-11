import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface ConfirmWithTreasuryCapArgs {
  treasuryCap: TransactionObjectInput;
  actionRequest: TransactionObjectInput;
}

/**
 * Move function: `confirm_with_treasury_cap`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::token`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param treasuryCap - Function parameter
 * @param actionRequest - Function parameter
 * @param txContext - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function confirmWithTreasuryCap(
  tx: Transaction,
  typeArg: string,
  args: ConfirmWithTreasuryCapArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::token::confirm_with_treasury_cap`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.treasuryCap), obj(tx, args.actionRequest)],
  });
}
