import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

/**
 * Move function: `into_balance`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::coin`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param coin - Function parameter
 */
export function intoBalance(
  tx: Transaction,
  typeArg: string,
  coin: TransactionObjectInput,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::coin::into_balance`,
    typeArguments: [typeArg],
    arguments: [obj(tx, coin)],
  });
}
