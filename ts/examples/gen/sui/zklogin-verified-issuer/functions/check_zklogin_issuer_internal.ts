import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument } from "@mysten/sui/transactions";

export interface CheckZkloginIssuerInternalArgs {
  address: string | TransactionArgument;
  addressSeed: bigint | TransactionArgument;
  issuer: Array<number | TransactionArgument> | TransactionArgument;
}

/**
 * Move function: `check_zklogin_issuer_internal`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::zklogin_verified_issuer`
 *
 * @param tx - The transaction object
 * @param address - Function parameter
 * @param addressSeed - Function parameter
 * @param issuer - Function parameter
 */
export function checkZkloginIssuerInternal(
  tx: Transaction,
  args: CheckZkloginIssuerInternalArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::zklogin_verified_issuer::check_zklogin_issuer_internal`,
    arguments: [
      pure(tx, args.address, `address`),
      pure(tx, args.addressSeed, `u256`),
      pure(tx, args.issuer, `vector<u8>`),
    ],
  });
}
