import { pure, vector } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Element } from "../index.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface MultiScalarMultiplicationArgs {
  u8: number | TransactionArgument;
  vecElement1: Array<TransactionObjectInput> | TransactionArgument;
  vecElement2: Array<TransactionObjectInput> | TransactionArgument;
}

/**
 * Move function: `multi_scalar_multiplication`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::group_ops`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @param tx - The transaction object
 * @param u8 - Function parameter
 * @param vecElement1 - Function parameter
 * @param vecElement2 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function multiScalarMultiplication(
  tx: Transaction,
  typeArgs: [string, string],
  args: MultiScalarMultiplicationArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::group_ops::multi_scalar_multiplication`,
    typeArguments: typeArgs,
    arguments: [
      pure(tx, args.u8, `u8`),
      vector(tx, `${Element.$typeName}<${typeArgs[0]}>`, args.vecElement1),
      vector(tx, `${Element.$typeName}<${typeArgs[1]}>`, args.vecElement2),
    ],
  });
}
