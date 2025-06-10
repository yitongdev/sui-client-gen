import { String } from "../../../_dependencies/source/0x1/string/structs/index.js";
import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument } from "@mysten/sui/transactions";

export interface VerifyZkloginIssuerArgs {
  addressSeed: bigint | TransactionArgument;
  issuer: string | TransactionArgument;
}

/**
 * Move function: `verify_zklogin_issuer`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::zklogin_verified_issuer`
 *
 * @param tx - The transaction object
 * @param addressSeed - Function parameter
 * @param issuer - Function parameter
 * @param ctx - Function parameter
 */
export function verifyZkloginIssuer(
  tx: Transaction,
  args: VerifyZkloginIssuerArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::zklogin_verified_issuer::verify_zklogin_issuer`,
    arguments: [
      pure(tx, args.addressSeed, `u256`),
      pure(tx, args.issuer, `${String.$typeName}`),
    ],
  });
}
