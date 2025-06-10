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
} from "@mysten/sui/transactions";

export interface CreateFooArgs {
  generic: GenericArg;
  reifiedPrimitiveVec:
    | Array<bigint | TransactionArgument>
    | TransactionArgument;
  reifiedObjectVec: Array<TransactionObjectInput> | TransactionArgument;
  genericVec: Array<GenericArg> | TransactionArgument;
  genericVecNested: Array<TransactionObjectInput> | TransactionArgument;
  twoGenerics: TransactionObjectInput;
  twoGenericsReifiedPrimitive: TransactionObjectInput;
  twoGenericsReifiedObject: TransactionObjectInput;
  twoGenericsNested: TransactionObjectInput;
  twoGenericsReifiedNested: TransactionObjectInput;
  twoGenericsNestedVec: Array<TransactionObjectInput> | TransactionArgument;
  objRef: TransactionObjectInput;
}

/**
 * Move function: `create_foo`
 * Module: `8b699fdce543505aeb290ee1b6b5d20fcaa8e8b1a5fc137a8b3facdfa2902209::fixture`
 *
 * @typeParam T - Type parameter 0
 * @typeParam U - Type parameter 1
 * @param tx - The transaction object
 * @param generic - Function parameter
 * @param reifiedPrimitiveVec - Function parameter
 * @param reifiedObjectVec - Function parameter
 * @param genericVec - Function parameter
 * @param genericVecNested - Function parameter
 * @param twoGenerics - Function parameter
 * @param twoGenericsReifiedPrimitive - Function parameter
 * @param twoGenericsReifiedObject - Function parameter
 * @param twoGenericsNested - Function parameter
 * @param twoGenericsReifiedNested - Function parameter
 * @param twoGenericsNestedVec - Function parameter
 * @param objRef - Function parameter
 * @param txContext - Function parameter
 */
export function createFoo(
  tx: Transaction,
  typeArgs: [string, string],
  args: CreateFooArgs,
) {
  return tx.moveCall({
    target: `${PUBLISHED_AT}::fixture::create_foo`,
    typeArguments: typeArgs,
    arguments: [
      generic(tx, `${typeArgs[0]}`, args.generic),
      pure(tx, args.reifiedPrimitiveVec, `vector<u64>`),
      vector(tx, `${Bar.$typeName}`, args.reifiedObjectVec),
      vector(tx, `${typeArgs[0]}`, args.genericVec),
      vector(
        tx,
        `${WithTwoGenerics.$typeName}<${typeArgs[0]}, u8>`,
        args.genericVecNested,
      ),
      obj(tx, args.twoGenerics),
      obj(tx, args.twoGenericsReifiedPrimitive),
      obj(tx, args.twoGenericsReifiedObject),
      obj(tx, args.twoGenericsNested),
      obj(tx, args.twoGenericsReifiedNested),
      vector(
        tx,
        `${WithTwoGenerics.$typeName}<${Bar.$typeName}, vector<${WithTwoGenerics.$typeName}<${typeArgs[0]}, u8>>>`,
        args.twoGenericsNestedVec,
      ),
      obj(tx, args.objRef),
    ],
  });
}
