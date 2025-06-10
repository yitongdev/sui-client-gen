import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

/**
 * Move function: `from_balance`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::coin`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param balance - Function parameter
 * @param ctx - Function parameter
 */
export function fromBalance(
  tx: Transaction,
  typeArg: string,
  balance: TransactionObjectInput,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::coin::from_balance`,
    typeArguments: [typeArg],
    arguments: [obj(tx, balance)],
  });
}
