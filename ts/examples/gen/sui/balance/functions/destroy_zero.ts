import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

/**
 * Move function: `destroy_zero`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::balance`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param balance - Function parameter
 */
export function destroyZero(
  tx: Transaction,
  typeArg: string,
  balance: TransactionObjectInput,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::balance::destroy_zero`,
    typeArguments: [typeArg],
    arguments: [obj(tx, balance)],
  });
}
