import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionObjectInput, TransactionResult } from "@mysten/sui/transactions";

export interface GetPythPriceAndIdentifierArgs {
  priceInfoObject: TransactionObjectInput;
  clock: TransactionObjectInput;
}

/**
 * Move function: `get_pyth_price_and_identifier`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::oracles`
 *
 * @param tx - The transaction object
 * @param priceInfoObject - Function parameter
 * @param clock - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function getPythPriceAndIdentifier(
  tx: Transaction,
  args: GetPythPriceAndIdentifierArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::oracles::get_pyth_price_and_identifier`,
    arguments: [obj(tx, args.priceInfoObject), obj(tx, args.clock)],
  });
}
