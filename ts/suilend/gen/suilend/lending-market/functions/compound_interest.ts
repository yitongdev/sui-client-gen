import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface CompoundInterestArgs {
  lendingMarket: TransactionObjectInput;
  u64: bigint | TransactionArgument;
  clock: TransactionObjectInput;
}

/**
 * Move function: `compound_interest`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::lending_market`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param lendingMarket - Function parameter
 * @param u64 - Function parameter
 * @param clock - Function parameter
 */
export function compoundInterest(
  tx: Transaction,
  typeArg: string,
  args: CompoundInterestArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::lending_market::compound_interest`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.lendingMarket),
      pure(tx, args.u64, `u64`),
      obj(tx, args.clock),
    ],
  });
}
