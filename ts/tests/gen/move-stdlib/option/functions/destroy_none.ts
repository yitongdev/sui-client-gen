import { GenericArg, option } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `destroy_none`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::option`
 *
 * @typeParam Element - Type parameter 0
 * @param tx - The transaction object
 * @param t - Function parameter
 */
export function destroyNone(
  tx: Transaction,
  typeArg: string,
  t: GenericArg | TransactionArgument | null,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::option::destroy_none`,
    typeArguments: [typeArg],
    arguments: [option(tx, `${typeArg}`, t)],
  });
}
