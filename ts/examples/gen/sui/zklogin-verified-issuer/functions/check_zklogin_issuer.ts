import { String } from "../../../_dependencies/source/0x1/string/structs/index.js";
import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface CheckZkloginIssuerArgs {
  address: string | TransactionArgument;
  addressSeed: bigint | TransactionArgument;
  issuer: string | TransactionArgument;
}

/**
 * Move function: `check_zklogin_issuer`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::zklogin_verified_issuer`
 *
 * @param tx - The transaction object
 * @param address - Function parameter
 * @param addressSeed - Function parameter
 * @param issuer - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function checkZkloginIssuer(
  tx: Transaction,
  args: CheckZkloginIssuerArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::zklogin_verified_issuer::check_zklogin_issuer`,
    arguments: [
      pure(tx, args.address, `address`),
      pure(tx, args.addressSeed, `u256`),
      pure(tx, args.issuer, `${String.$typeName}`),
    ],
  });
}
