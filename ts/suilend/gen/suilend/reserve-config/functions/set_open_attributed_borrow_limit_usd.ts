import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface SetOpenAttributedBorrowLimitUsdArgs {
  reserveConfigBuilder: TransactionObjectInput;
  u64: bigint | TransactionArgument;
}

/**
 * Move function: `set_open_attributed_borrow_limit_usd`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::reserve_config`
 *
 * @param tx - The transaction object
 * @param reserveConfigBuilder - Function parameter
 * @param u64 - Function parameter
 */
export function setOpenAttributedBorrowLimitUsd(
  tx: Transaction,
  args: SetOpenAttributedBorrowLimitUsdArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::reserve_config::set_open_attributed_borrow_limit_usd`,
    arguments: [obj(tx, args.reserveConfigBuilder), pure(tx, args.u64, `u64`)],
  });
}
