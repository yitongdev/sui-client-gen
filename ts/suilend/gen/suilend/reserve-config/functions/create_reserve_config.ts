import { pure } from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import {
  Transaction,
  TransactionArgument,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface CreateReserveConfigArgs {
  u81: number | TransactionArgument;
  u82: number | TransactionArgument;
  u83: number | TransactionArgument;
  u641: bigint | TransactionArgument;
  u642: bigint | TransactionArgument;
  u643: bigint | TransactionArgument;
  u644: bigint | TransactionArgument;
  u645: bigint | TransactionArgument;
  u646: bigint | TransactionArgument;
  u647: bigint | TransactionArgument;
  u648: bigint | TransactionArgument;
  u649: bigint | TransactionArgument;
  u6410: bigint | TransactionArgument;
  vecU8: Array<number | TransactionArgument> | TransactionArgument;
  vecU64: Array<bigint | TransactionArgument> | TransactionArgument;
  bool: boolean | TransactionArgument;
  u6411: bigint | TransactionArgument;
  u6412: bigint | TransactionArgument;
}

/**
 * Move function: `create_reserve_config`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::reserve_config`
 *
 * @param tx - The transaction object
 * @param u81 - Function parameter
 * @param u82 - Function parameter
 * @param u83 - Function parameter
 * @param u641 - Function parameter
 * @param u642 - Function parameter
 * @param u643 - Function parameter
 * @param u644 - Function parameter
 * @param u645 - Function parameter
 * @param u646 - Function parameter
 * @param u647 - Function parameter
 * @param u648 - Function parameter
 * @param u649 - Function parameter
 * @param u6410 - Function parameter
 * @param vecU8 - Function parameter
 * @param vecU64 - Function parameter
 * @param bool - Function parameter
 * @param u6411 - Function parameter
 * @param u6412 - Function parameter
 * @param txContext - Function parameter
 * @returns TransactionResult - The transaction result
 */
export function createReserveConfig(
  tx: Transaction,
  args: CreateReserveConfigArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::reserve_config::create_reserve_config`,
    arguments: [
      pure(tx, args.u81, `u8`),
      pure(tx, args.u82, `u8`),
      pure(tx, args.u83, `u8`),
      pure(tx, args.u641, `u64`),
      pure(tx, args.u642, `u64`),
      pure(tx, args.u643, `u64`),
      pure(tx, args.u644, `u64`),
      pure(tx, args.u645, `u64`),
      pure(tx, args.u646, `u64`),
      pure(tx, args.u647, `u64`),
      pure(tx, args.u648, `u64`),
      pure(tx, args.u649, `u64`),
      pure(tx, args.u6410, `u64`),
      pure(tx, args.vecU8, `vector<u8>`),
      pure(tx, args.vecU64, `vector<u64>`),
      pure(tx, args.bool, `bool`),
      pure(tx, args.u6411, `u64`),
      pure(tx, args.u6412, `u64`),
    ],
  });
}
