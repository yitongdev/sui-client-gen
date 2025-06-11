import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface SetOpenLtvPctArgs {
  reserveConfigBuilder: TransactionObjectInput;
  u8: number | TransactionArgument;
}

/**
 * Move function: `set_open_ltv_pct`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::reserve_config`
 *
 * @param tx - The transaction object
 * @param reserveConfigBuilder - Function parameter
 * @param u8 - Function parameter
 */
export function setOpenLtvPct(
  tx: Transaction,
  args: SetOpenLtvPctArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::reserve_config::set_open_ltv_pct`,
    arguments: [obj(tx, args.reserveConfigBuilder), pure(tx, args.u8, `u8`)],
  });
}
