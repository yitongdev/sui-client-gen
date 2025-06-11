import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface AssertPriceIsFreshArgs {
  reserve: TransactionObjectInput;
  clock: TransactionObjectInput;
}

/**
 * Move function: `assert_price_is_fresh`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::reserve`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param reserve - Function parameter
 * @param clock - Function parameter
 */
export function assertPriceIsFresh(
  tx: Transaction,
  typeArg: string,
  args: AssertPriceIsFreshArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::reserve::assert_price_is_fresh`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.reserve), obj(tx, args.clock)],
  });
}
