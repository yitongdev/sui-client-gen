import { vector } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Element } from "../../group-ops/structs/index.js";
import { G2, Scalar } from "../index.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
} from "@mysten/sui/transactions";

export interface G2MultiScalarMultiplicationArgs {
  scalars: Array<TransactionObjectInput> | TransactionArgument;
  elements: Array<TransactionObjectInput> | TransactionArgument;
}

/**
 * Move function: `g2_multi_scalar_multiplication`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::bls12381`
 *
 * @param tx - The transaction object
 * @param scalars - Function parameter
 * @param elements - Function parameter
 */
export function g2MultiScalarMultiplication(
  tx: Transaction,
  args: G2MultiScalarMultiplicationArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::bls12381::g2_multi_scalar_multiplication`,
    arguments: [
      vector(tx, `${Element.$typeName}<${Scalar.$typeName}>`, args.scalars),
      vector(tx, `${Element.$typeName}<${G2.$typeName}>`, args.elements),
    ],
  });
}
