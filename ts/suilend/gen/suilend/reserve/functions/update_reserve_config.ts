import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

export interface UpdateReserveConfigArgs {
  reserve: TransactionObjectInput;
  reserveConfig: TransactionObjectInput;
}

/**
 * Move function: `update_reserve_config`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::reserve`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param reserve - Function parameter
 * @param reserveConfig - Function parameter
 */
export function updateReserveConfig(
  tx: Transaction,
  typeArg: string,
  args: UpdateReserveConfigArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::reserve::update_reserve_config`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.reserve), obj(tx, args.reserveConfig)],
  });
}
