import { GenericArg, generic, obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

export interface AddToBalanceArgs {
  rule: GenericArg;
  policy: TransactionObjectInput;
  coin: TransactionObjectInput;
}

/**
 * Move function: `add_to_balance`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::transfer_policy`
 *
 * @typeParam T - Type parameter 0
 * @typeParam Rule - Type parameter 1
 * @param tx - The transaction object
 * @param rule - Function parameter
 * @param policy - Function parameter
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
    arguments: [generic(tx, `${typeArgs[1]}`, args.rule), obj(tx, args.policy), obj(tx, args.coin)],
  });
}
