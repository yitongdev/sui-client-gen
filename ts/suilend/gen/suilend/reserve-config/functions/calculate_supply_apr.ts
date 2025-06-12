import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

export interface CalculateSupplyAprArgs {
  reserveConfig: TransactionObjectInput;
  decimal1: TransactionObjectInput;
  decimal2: TransactionObjectInput;
}

/**
 * Move function: `calculate_supply_apr`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::reserve_config`
 *
 * @param tx - The transaction object
 * @param reserveConfig - Function parameter
 * @param decimal1 - Function parameter
 * @param decimal2 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function calculateSupplyApr(
  tx: Transaction,
  args: CalculateSupplyAprArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::reserve_config::calculate_supply_apr`,
    arguments: [obj(tx, args.reserveConfig), obj(tx, args.decimal1), obj(tx, args.decimal2)],
  });
}
