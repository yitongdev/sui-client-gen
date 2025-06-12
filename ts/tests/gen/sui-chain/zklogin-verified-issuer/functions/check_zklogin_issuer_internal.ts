import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

export interface CheckZkloginIssuerInternalArgs {
  address: string | TransactionArgument;
  u256: bigint | TransactionArgument;
  vecU8: Array<number | TransactionArgument> | TransactionArgument;
}

/**
 * Move function: `check_zklogin_issuer_internal`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::zklogin_verified_issuer`
 *
 * @param tx - The transaction object
 * @param address - Function parameter
 * @param u256 - Function parameter
 * @param vecU8 - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function checkZkloginIssuerInternal(
  tx: Transaction,
  args: CheckZkloginIssuerInternalArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::zklogin_verified_issuer::check_zklogin_issuer_internal`,
    arguments: [
      pure(tx, args.address, `address`),
      pure(tx, args.u256, `u256`),
      pure(tx, args.vecU8, `vector<u8>`),
    ],
  });
}
