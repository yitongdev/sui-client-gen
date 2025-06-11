import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface PowArgs {
  u256: bigint | TransactionArgument;
  u8: number | TransactionArgument;
}

/**
 * Move function: `pow`
 * Module: `0000000000000000000000000000000000000000000000000000000000000001::u256`
 *
 * @param tx - The transaction object
 * @param u256 - Function parameter
 * @param u8 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function pow(tx: Transaction, args: PowArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::u256::pow`,
    arguments: [pure(tx, args.u256, `u256`), pure(tx, args.u8, `u8`)],
  });
}
