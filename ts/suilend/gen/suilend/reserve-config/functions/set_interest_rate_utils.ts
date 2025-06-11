import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface SetInterestRateUtilsArgs {
  reserveConfigBuilder: TransactionObjectInput;
  vecU8: Array<number | TransactionArgument> | TransactionArgument;
}

/**
 * Move function: `set_interest_rate_utils`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::reserve_config`
 *
 * @param tx - The transaction object
 * @param reserveConfigBuilder - Function parameter
 * @param vecU8 - Function parameter
 */
export function setInterestRateUtils(
  tx: Transaction,
  args: SetInterestRateUtilsArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::reserve_config::set_interest_rate_utils`,
    arguments: [
      obj(tx, args.reserveConfigBuilder),
      pure(tx, args.vecU8, `vector<u8>`),
    ],
  });
}
