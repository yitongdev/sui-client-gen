import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface MintArgs {
  treasuryCap: TransactionObjectInput;
  u64: bigint | TransactionArgument;
}

/**
 * Move function: `mint`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::token`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param treasuryCap - Function parameter
 * @param u64 - Function parameter
 * @param txContext - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function mint(tx: Transaction, typeArg: string, args: MintArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::token::mint`,
    typeArguments: [typeArg],
    arguments: [obj(tx, args.treasuryCap), pure(tx, args.u64, `u64`)],
  });
}
