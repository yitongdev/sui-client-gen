import { ID } from "../../../_dependencies/onchain/0x2/object/structs/index.js";
import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface NewObligationOwnerCapArgs {
  lendingMarketOwnerCap: TransactionObjectInput;
  lendingMarket: TransactionObjectInput;
  id: string | TransactionArgument;
}

/**
 * Move function: `new_obligation_owner_cap`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::lending_market`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param lendingMarketOwnerCap - Function parameter
 * @param lendingMarket - Function parameter
 * @param id - Function parameter
 * @param txContext - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function newObligationOwnerCap(
  tx: Transaction,
  typeArg: string,
  args: NewObligationOwnerCapArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::lending_market::new_obligation_owner_cap`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.lendingMarketOwnerCap),
      obj(tx, args.lendingMarket),
      pure(tx, args.id, `${ID.$typeName}`),
    ],
  });
}
