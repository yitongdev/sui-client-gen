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
  type: number | TransactionArgument;
  scalars: Array<TransactionObjectInput> | TransactionArgument;
  elements: Array<TransactionObjectInput> | TransactionArgument;
}

/**
 * Move function: `multi_scalar_multiplication`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::group_ops`
 *
 * @typeParam S - Type parameter 0
 * @typeParam G - Type parameter 1
 * @param tx - The transaction object
 * @param type - Function parameter
 * @param scalars - Function parameter
 * @param elements - Function parameter
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
      pure(tx, args.type, `u8`),
      vector(tx, `${Element.$typeName}<${typeArgs[0]}>`, args.scalars),
      vector(tx, `${Element.$typeName}<${typeArgs[1]}>`, args.elements),
    ],
  });
}
