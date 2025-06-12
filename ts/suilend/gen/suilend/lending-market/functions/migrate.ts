import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

export interface MigrateArgs {
  lendingMarketOwnerCap: TransactionObjectInput;
  lendingMarket: TransactionObjectInput;
}

/**
 * Move function: `migrate`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::lending_market`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param lendingMarketOwnerCap - Function parameter
 * @param lendingMarket - Function parameter
 */
export function migrate(tx: Transaction, typeArg: string, args: MigrateArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::lending_market::migrate`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.lendingMarketOwnerCap), obj(tx, args.lendingMarket)],
  });
}
