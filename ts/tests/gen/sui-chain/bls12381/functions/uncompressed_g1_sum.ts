import { vector } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Element } from "../../group-ops/structs/index.js";
import { UncompressedG1 } from "../index.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `uncompressed_g1_sum`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::bls12381`
 *
 * @param tx - The transaction object
 * @param vecElement - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function uncompressedG1Sum(
  tx: Transaction,
  vecElement: Array<TransactionObjectInput> | TransactionArgument,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::bls12381::uncompressed_g1_sum`,
    arguments: [vector(tx, `${Element.$typeName}<${UncompressedG1.$typeName}>`, vecElement)],
  });
}
