import { GenericArg, generic } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionResult } from "@mysten/sui/transactions";

/**
 * Move function: `create_with_generic_field`
 * Module: `8b699fdce543505aeb290ee1b6b5d20fcaa8e8b1a5fc137a8b3facdfa2902209::fixture`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param t0 - Function parameter
 * @param txContext - Function parameter
 */
export function createWithGenericField(
  tx: Transaction,
  typeArg: string,
  t0: GenericArg,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::fixture::create_with_generic_field`,
    typeArguments: [typeArg],
    arguments: [generic(tx, `${typeArg}`, t0)],
  });
}
