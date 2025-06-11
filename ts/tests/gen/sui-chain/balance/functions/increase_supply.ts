import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface IncreaseSupplyArgs {
  supply: TransactionObjectInput;
  u64: bigint | TransactionArgument;
}

/**
 * Move function: `increase_supply`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::balance`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param supply - Function parameter
 * @param u64 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function increaseSupply(
  tx: Transaction,
  typeArg: string,
  args: IncreaseSupplyArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::balance::increase_supply`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.supply), pure(tx, args.u64, `u64`)],
  });
}
