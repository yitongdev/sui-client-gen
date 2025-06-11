import { ID } from "../../../_dependencies/onchain/0x2/object/structs/index.js";
import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface LiquidateArgs {
  lendingMarket: TransactionObjectInput;
  id: string | TransactionArgument;
  u641: bigint | TransactionArgument;
  u642: bigint | TransactionArgument;
  clock: TransactionObjectInput;
  coin: TransactionObjectInput;
}

/**
 * Move function: `liquidate`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::lending_market`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @typeParam T2 - Type parameter 2
 * @param tx - The transaction object
 * @param lendingMarket - Function parameter
 * @param id - Function parameter
 * @param u641 - Function parameter
 * @param u642 - Function parameter
 * @param clock - Function parameter
 * @param coin - Function parameter
 * @param txContext - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function liquidate(
  tx: Transaction,
  typeArgs: [string, string, string],
  args: LiquidateArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::lending_market::liquidate`,
    typeArguments: typeArgs,
    arguments: [
      obj(tx, args.lendingMarket),
      pure(tx, args.id, `${ID.$typeName}`),
      pure(tx, args.u641, `u64`),
      pure(tx, args.u642, `u64`),
      obj(tx, args.clock),
      obj(tx, args.coin),
    ],
  });
}
