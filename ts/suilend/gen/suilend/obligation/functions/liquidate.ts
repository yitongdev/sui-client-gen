import { obj, pure, vector } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Reserve } from "../../reserve/structs/index.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface LiquidateArgs {
  obligation: TransactionObjectInput;
  vecReserve: Array<TransactionObjectInput> | TransactionArgument;
  u641: bigint | TransactionArgument;
  u642: bigint | TransactionArgument;
  clock: TransactionObjectInput;
  u643: bigint | TransactionArgument;
}

/**
 * Move function: `liquidate`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::obligation`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param obligation - Function parameter
 * @param vecReserve - Function parameter
 * @param u641 - Function parameter
 * @param u642 - Function parameter
 * @param clock - Function parameter
 * @param u643 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function liquidate(
  tx: Transaction,
  typeArg: string,
  args: LiquidateArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::obligation::liquidate`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.obligation),
      vector(tx, `${Reserve.$typeName}<${typeArg}>`, args.vecReserve),
      pure(tx, args.u641, `u64`),
      pure(tx, args.u642, `u64`),
      obj(tx, args.clock),
      pure(tx, args.u643, `u64`),
    ],
  });
}
