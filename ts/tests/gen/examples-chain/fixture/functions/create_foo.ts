import {
  GenericArg,
  generic,
  obj,
  pure,
  vector,
} from "../../../_framework/util.js";
import { PUBLISHED_AT } from "../../constants.js";
import { Bar, WithTwoGenerics } from "../index.js";
import {
  Transaction,
  TransactionArgument,
  TransactionObjectInput,
  TransactionResult,
} from "@mysten/sui/transactions";

export interface CreateFooArgs {
  t0: GenericArg;
  vecU64: Array<bigint | TransactionArgument> | TransactionArgument;
  vecBar: Array<TransactionObjectInput> | TransactionArgument;
  vecT0: Array<GenericArg> | TransactionArgument;
  vecWithTwoGenerics1: Array<TransactionObjectInput> | TransactionArgument;
  withTwoGenerics1: TransactionObjectInput;
  withTwoGenerics2: TransactionObjectInput;
  withTwoGenerics3: TransactionObjectInput;
  withTwoGenerics4: TransactionObjectInput;
  withTwoGenerics5: TransactionObjectInput;
  vecWithTwoGenerics2: Array<TransactionObjectInput> | TransactionArgument;
  bar: TransactionObjectInput;
}

/**
 * Move function: `create_foo`
 * Module: `8b699fdce543505aeb290ee1b6b5d20fcaa8e8b1a5fc137a8b3facdfa2902209::fixture`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @param tx - The transaction object
 * @param t0 - Function parameter
 * @param vecU64 - Function parameter
 * @param vecBar - Function parameter
 * @param vecT0 - Function parameter
 * @param vecWithTwoGenerics1 - Function parameter
 * @param withTwoGenerics1 - Function parameter
 * @param withTwoGenerics2 - Function parameter
 * @param withTwoGenerics3 - Function parameter
 * @param withTwoGenerics4 - Function parameter
 * @param withTwoGenerics5 - Function parameter
 * @param vecWithTwoGenerics2 - Function parameter
 * @param bar - Function parameter
 * @param txContext - Function parameter
 */
export function createFoo(
  tx: Transaction,
  typeArgs: [string, string],
  args: CreateFooArgs,
): TransactionResult {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::fixture::create_foo`,
    typeArguments: typeArgs,
    arguments: [
      generic(tx, `${typeArgs[0]}`, args.t0),
      pure(tx, args.vecU64, `vector<u64>`),
      vector(tx, `${Bar.$typeName}`, args.vecBar),
      vector(tx, `${typeArgs[0]}`, args.vecT0),
      vector(
        tx,
        `${WithTwoGenerics.$typeName}<${typeArgs[0]}, u8>`,
        args.vecWithTwoGenerics1,
      ),
      obj(tx, args.withTwoGenerics1),
      obj(tx, args.withTwoGenerics2),
      obj(tx, args.withTwoGenerics3),
      obj(tx, args.withTwoGenerics4),
      obj(tx, args.withTwoGenerics5),
      vector(
        tx,
        `${WithTwoGenerics.$typeName}<${Bar.$typeName}, vector<${WithTwoGenerics.$typeName}<${typeArgs[0]}, u8>>>`,
        args.vecWithTwoGenerics2,
      ),
      obj(tx, args.bar),
    ],
  });
}
