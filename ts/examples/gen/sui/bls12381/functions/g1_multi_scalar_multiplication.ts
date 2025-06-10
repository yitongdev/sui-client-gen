import { vector } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Element } from "../../group-ops/structs/index.js";
import { G1, Scalar } from "../index.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
} from "@mysten/sui/transactions";

export interface G1MultiScalarMultiplicationArgs {
  scalars: Array<TransactionObjectInput> | TransactionArgument;
  elements: Array<TransactionObjectInput> | TransactionArgument;
}

/**
 * Move function: `g1_multi_scalar_multiplication`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::bls12381`
 *
 * @param tx - The transaction object
 * @param scalars - Function parameter
 * @param elements - Function parameter
 */
export function g1MultiScalarMultiplication(
  tx: Transaction,
  args: G1MultiScalarMultiplicationArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::bls12381::g1_multi_scalar_multiplication`,
    arguments: [
      vector(tx, `${Element.$typeName}<${Scalar.$typeName}>`, args.scalars),
      vector(tx, `${Element.$typeName}<${G1.$typeName}>`, args.elements),
    ],
  });
}
