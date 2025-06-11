import { ID } from "../../../_dependencies/onchain/0x2/object/structs/index.js";
import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface CreateReserveArgs {
  id: string | TransactionArgument;
  reserveConfig: TransactionObjectInput;
  u64: bigint | TransactionArgument;
  u8: number | TransactionArgument;
  priceInfoObject: TransactionObjectInput;
  clock: TransactionObjectInput;
}

/**
 * Move function: `create_reserve`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::reserve`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @param tx - The transaction object
 * @param id - Function parameter
 * @param reserveConfig - Function parameter
 * @param u64 - Function parameter
 * @param u8 - Function parameter
 * @param priceInfoObject - Function parameter
 * @param clock - Function parameter
 * @param txContext - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function createReserve(
  tx: Transaction,
  typeArgs: [string, string],
  args: CreateReserveArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::reserve::create_reserve`,
    typeArguments: typeArgs,
    arguments: [
      pure(tx, args.id, `${ID.$typeName}`),
      obj(tx, args.reserveConfig),
      pure(tx, args.u64, `u64`),
      pure(tx, args.u8, `u8`),
      obj(tx, args.priceInfoObject),
      obj(tx, args.clock),
    ],
  });
}
