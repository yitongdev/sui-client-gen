import { obj, vector } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Reserve } from "../../reserve/structs/index.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface RefreshArgs {
  obligation: TransactionObjectInput;
  vecReserve: Array<TransactionObjectInput> | TransactionArgument;
  clock: TransactionObjectInput;
}

/**
 * Move function: `refresh`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::obligation`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param obligation - Function parameter
 * @param vecReserve - Function parameter
 * @param clock - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function refresh(
  tx: Transaction,
  typeArg: string,
  args: RefreshArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::obligation::refresh`,
    typeArguments: [typeArg],
    arguments: [
      obj(tx, args.obligation),
      vector(tx, `${Reserve.$typeName}<${typeArg}>`, args.vecReserve),
      obj(tx, args.clock),
    ],
  });
}
