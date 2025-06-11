import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface MaxWithdrawAmountArgs {
  obligation: TransactionObjectInput;
  reserve: TransactionObjectInput;
}

/**
 * Move function: `max_withdraw_amount`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::obligation`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param obligation - Function parameter
 * @param reserve - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function maxWithdrawAmount(
  tx: Transaction,
  typeArg: string,
  args: MaxWithdrawAmountArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::obligation::max_withdraw_amount`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.obligation), obj(tx, args.reserve)],
  });
}
