import { GenericArg, vector } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `flatten`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::vector`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param vecVecT0 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function flatten(
  tx: Transaction,
  typeArg: string,
  vecVecT0:
    | Array<Array<GenericArg> | TransactionArgument>
    | TransactionArgument,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::vector::flatten`,
    typeArguments: [typeArg],
    arguments: [vector(tx, `vector<${typeArg}>`, vecVecT0)],
  });
}
