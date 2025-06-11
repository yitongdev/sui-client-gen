import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface SetSuiMintFeeBpsArgs {
  feeConfigBuilder: TransactionObjectInput;
  u64: bigint | TransactionArgument;
}

/**
 * Move function: `set_sui_mint_fee_bps`
 * Module: `b0575765166030556a6eafd3b1b970eba8183ff748860680245b9edd41c716e7::fees`
 *
 * @param tx - The transaction object
 * @param feeConfigBuilder - Function parameter
 * @param u64 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function setSuiMintFeeBps(
  tx: Transaction,
  args: SetSuiMintFeeBpsArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::fees::set_sui_mint_fee_bps`,
    arguments: [obj(tx, args.feeConfigBuilder), pure(tx, args.u64, `u64`)],
  });
}
