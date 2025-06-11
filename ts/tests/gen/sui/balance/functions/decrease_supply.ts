import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface DecreaseSupplyArgs {
  self: TransactionObjectInput;
  balance: TransactionObjectInput;
}

/**
 * Move function: `decrease_supply`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::balance`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param self - Function parameter
 * @param balance - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function decreaseSupply(
  tx: Transaction,
  typeArg: string,
  args: DecreaseSupplyArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::balance::decrease_supply`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.self), obj(tx, args.balance)],
  });
}
