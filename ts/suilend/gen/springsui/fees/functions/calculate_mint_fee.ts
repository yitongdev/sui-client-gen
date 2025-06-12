import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface CalculateMintFeeArgs {
  feeConfig: TransactionObjectInput;
  u64: bigint | TransactionArgument;
}

/**
 * Move function: `calculate_mint_fee`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::fees`
 *
 * @param tx - The transaction object
 * @param feeConfig - Function parameter
 * @param u64 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function calculateMintFee(tx: Transaction, args: CalculateMintFeeArgs): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::fees::calculate_mint_fee`,
    arguments: [obj(tx, args.feeConfig), pure(tx, args.u64, `u64`)],
  });
}
