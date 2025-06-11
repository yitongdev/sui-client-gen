import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface AddToBalanceArgs {
  t1: GenericArg;
  transferPolicy: TransactionObjectInput;
  coin: TransactionObjectInput;
}

/**
 * Move function: `add_to_balance`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::transfer_policy`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @param tx - The transaction object
 * @param t1 - Function parameter
 * @param transferPolicy - Function parameter
 * @param coin - Function parameter
 */
export function addToBalance(
  tx: Transaction,
  typeArgs: [string, string],
  args: AddToBalanceArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::transfer_policy::add_to_balance`,
    typeArguments: typeArgs,
    arguments: [
      generic(tx, `${typeArgs[1]}`, args.t1),
      obj(tx, args.transferPolicy),
      obj(tx, args.coin),
    ],
  });
}
