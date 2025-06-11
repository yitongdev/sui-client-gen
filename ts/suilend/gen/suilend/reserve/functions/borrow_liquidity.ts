import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface BorrowLiquidityArgs {
  reserve: TransactionObjectInput;
  u64: bigint | TransactionArgument;
}

/**
 * Move function: `borrow_liquidity`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::reserve`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @param tx - The transaction object
 * @param reserve - Function parameter
 * @param u64 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function borrowLiquidity(
  tx: Transaction,
  typeArgs: [string, string],
  args: BorrowLiquidityArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::reserve::borrow_liquidity`,
    typeArguments: typeArgs,
    arguments: [obj(tx, args.reserve), pure(tx, args.u64, `u64`)],
  });
}
