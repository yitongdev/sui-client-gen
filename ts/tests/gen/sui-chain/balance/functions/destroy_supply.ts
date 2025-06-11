import { obj } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

/**
 * Move function: `destroy_supply`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::balance`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param supply - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function destroySupply(
  tx: Transaction,
  typeArg: string,
  supply: TransactionObjectInput,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::balance::destroy_supply`,
    typeArguments: [typeArg],
    arguments: [obj(tx, supply)],
  });
}
