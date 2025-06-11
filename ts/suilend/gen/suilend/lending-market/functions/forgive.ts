import { ID } from "../../../_dependencies/onchain/0x2/object/structs/index.js";
import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface ForgiveArgs {
  lendingMarketOwnerCap: TransactionObjectInput;
  lendingMarket: TransactionObjectInput;
  u641: bigint | TransactionArgument;
  id: string | TransactionArgument;
  clock: TransactionObjectInput;
  u642: bigint | TransactionArgument;
}

/**
 * Move function: `forgive`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::lending_market`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @param tx - The transaction object
 * @param lendingMarketOwnerCap - Function parameter
 * @param lendingMarket - Function parameter
 * @param u641 - Function parameter
 * @param id - Function parameter
 * @param clock - Function parameter
 * @param u642 - Function parameter
 */
export function forgive(
  tx: Transaction,
  typeArgs: [string, string],
  args: ForgiveArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::lending_market::forgive`,
    typeArguments: typeArgs,
    arguments: [
      obj(tx, args.lendingMarketOwnerCap),
      obj(tx, args.lendingMarket),
      pure(tx, args.u641, `u64`),
      pure(tx, args.id, `${ID.$typeName}`),
      obj(tx, args.clock),
      pure(tx, args.u642, `u64`),
    ],
  });
}
