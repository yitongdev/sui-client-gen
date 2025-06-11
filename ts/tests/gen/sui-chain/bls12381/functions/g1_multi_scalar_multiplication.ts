import { vector } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Element } from "../../group-ops/structs/index.js";
import { G1, Scalar } from "../index.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface G1MultiScalarMultiplicationArgs {
  vecElement1: Array<TransactionObjectInput> | TransactionArgument;
  vecElement2: Array<TransactionObjectInput> | TransactionArgument;
}

/**
 * Move function: `g1_multi_scalar_multiplication`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::bls12381`
 *
 * @param tx - The transaction object
 * @param vecElement1 - Function parameter
 * @param vecElement2 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function g1MultiScalarMultiplication(
  tx: Transaction,
  args: G1MultiScalarMultiplicationArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::bls12381::g1_multi_scalar_multiplication`,
    arguments: [
      vector(tx, `${Element.$typeName}<${Scalar.$typeName}>`, args.vecElement1),
      vector(tx, `${Element.$typeName}<${G1.$typeName}>`, args.vecElement2),
    ],
  });
}
