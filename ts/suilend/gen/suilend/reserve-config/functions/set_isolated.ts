import { obj, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface SetIsolatedArgs {
  reserveConfigBuilder: TransactionObjectInput;
  bool: boolean | TransactionArgument;
}

/**
 * Move function: `set_isolated`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::reserve_config`
 *
 * @param tx - The transaction object
 * @param reserveConfigBuilder - Function parameter
 * @param bool - Function parameter
 */
export function setIsolated(
  tx: Transaction,
  args: SetIsolatedArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::reserve_config::set_isolated`,
    arguments: [
      obj(tx, args.reserveConfigBuilder),
      pure(tx, args.bool, `bool`),
    ],
  });
}
