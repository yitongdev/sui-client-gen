import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `new`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::display`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param publisher - Function parameter
 * @param txContext - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function new_(
  tx: Transaction,
  typeArg: string,
  publisher: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::display::new`,
    typeArguments: [typeArg],
    arguments: [obj(tx, publisher)],
  });
}
