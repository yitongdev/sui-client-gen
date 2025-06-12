import { GenericArg, generic, pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Transaction, TransactionArgument, TransactionResult } from "@mysten/sui/transactions";

export interface PartyTransferImplArgs {
  t0: GenericArg;
  u64: bigint | TransactionArgument;
  vecAddress: Array<string | TransactionArgument> | TransactionArgument;
  vecU64: Array<bigint | TransactionArgument> | TransactionArgument;
}

/**
 * Move function: `party_transfer_impl`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::transfer`
 *
 * @typeParam T0 - Type parameter 0
 * @param tx - The transaction object
 * @param t0 - Function parameter
 * @param u64 - Function parameter
 * @param vecAddress - Function parameter
 * @param vecU64 - Function parameter
 */
export function partyTransferImpl(
  tx: Transaction,
  typeArg: string,
  args: PartyTransferImplArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::transfer::party_transfer_impl`,
    typeArguments: [typeArg],
    arguments: [
      generic(tx, `${typeArg}`, args.t0),
      pure(tx, args.u64, `u64`),
      pure(tx, args.vecAddress, `vector<address>`),
      pure(tx, args.vecU64, `vector<u64>`),
    ],
  });
}
