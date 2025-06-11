import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface SetCloseLtvPctArgs {
  reserveConfigBuilder: TransactionObjectInput;
  u8: number | TransactionArgument;
}

/**
 * Move function: `set_close_ltv_pct`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::reserve_config`
 *
 * @param tx - The transaction object
 * @param reserveConfigBuilder - Function parameter
 * @param u8 - Function parameter
 */
export function setCloseLtvPct(
  tx: Transaction,
  args: SetCloseLtvPctArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::reserve_config::set_close_ltv_pct`,
    arguments: [obj(tx, args.reserveConfigBuilder), pure(tx, args.u8, `u8`)],
  });
}
