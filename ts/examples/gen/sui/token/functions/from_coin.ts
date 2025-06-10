import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput } from "@mysten/sui/transactions";

/**
 * Move function: `from_coin`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::token`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param coin - Function parameter
 * @param ctx - Function parameter
 */
export function fromCoin(
  tx: Transaction,
  typeArg: string,
  coin: TransactionObjectInput,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::token::from_coin`,
    typeArguments: [typeArg],
    arguments: [obj(tx, coin)],
  });
}
