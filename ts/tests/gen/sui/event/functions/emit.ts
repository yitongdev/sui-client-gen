import { GenericArg, generic } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `emit`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::event`
 *
 * @typeParam T - Type parameter 0
 * @param tx - The transaction object
 * @param event - Function parameter
 */
export function emit(
  tx: Transaction,
  typeArg: string,
  event: GenericArg,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::event::emit`,
    typeArguments: [typeArg],
    arguments: [generic(tx, `${typeArg}`, event)],
  });
}
