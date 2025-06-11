import { GenericArg, vector } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `destroy_empty`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::vector`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param vecT0 - Function parameter
 */
export function destroyEmpty(
  tx: Transaction,
  typeArg: string,
  vecT0: Array<GenericArg> | TransactionArgument,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::vector::destroy_empty`,
    typeArguments: [typeArg],
    arguments: [vector(tx, `${typeArg}`, vecT0)],
  });
}
