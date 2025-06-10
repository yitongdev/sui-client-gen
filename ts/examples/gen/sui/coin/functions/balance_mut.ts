import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

/**
 * Move function: `balance_mut`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::coin`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param coin - Function parameter
 */
export function balanceMut(
  tx: Transaction,
  typeArg: string,
  coin: TransactionObjectInput,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::coin::balance_mut`,
    typeArguments: [typeArg],
    arguments: [obj(tx, coin)],
  });
}
