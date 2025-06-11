import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `destroy_zero`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::coin`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param c - Function parameter
 */
export function destroyZero(
  tx: Transaction,
  typeArg: string,
  c: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::coin::destroy_zero`,
    typeArguments: [typeArg],
    arguments: [obj(tx, c)],
  });
}
