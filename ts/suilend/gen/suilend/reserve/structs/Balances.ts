import * as reified from "../../../_framework/reified.js";
import {
  Balance,
  Supply,
} from "../../../_dependencies/onchain/0x2/balance/structs/index.js";
import {
  PhantomReified,
  PhantomToTypeStr,
  PhantomTypeArgument,
  Reified,
  StructClass,
  ToField,
  ToPhantomTypeArgument,
  ToTypeStr,
  assertFieldsWithTypesArgsMatch,
  assertReifiedTypeArgsMatch,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  extractType,
  phantom,
  ToTypeStr as ToPhantom,
} from "../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
  parseTypeName,
} from "../../../_framework/util.js";
import { PKG_V1 } from "../../constants.js";
import { CToken as CToken1 } from "./CToken.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isBalances(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V1}::reserve::Balances` + "<");
}

export interface BalancesFields<
  T0 extends PhantomTypeArgument,
  T1 extends PhantomTypeArgument,
> {
  availableAmount: ToField<Balance<T1>>;
  ctokenSupply: ToField<Supply<ToPhantom<CToken1<T0, T1>>>>;
  fees: ToField<Balance<T1>>;
  ctokenFees: ToField<Balance<ToPhantom<CToken1<T0, T1>>>>;
  depositedCtokens: ToField<Balance<ToPhantom<CToken1<T0, T1>>>>;
}

export type BalancesReified<
  T0 extends PhantomTypeArgument,
  T1 extends PhantomTypeArgument,
> = Reified<Balances<T0, T1>, BalancesFields<T0, T1>>;

/**
 * Move struct: `Balances`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::reserve`
 *
 * @typeParam T0 - Type parameter 0 (phantom)
 * @typeParam T1 - Type parameter 1 (phantom)
 */
export class Balances<
  T0 extends PhantomTypeArgument,
  T1 extends PhantomTypeArgument,
> implements StructClass
{
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::reserve::Balances`;
  static readonly $numTypeParams = 2;
  static readonly $isPhantom = [true, true] as const;

  readonly $typeName = Balances.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::reserve::Balances<${PhantomToTypeStr<T0>}, ${PhantomToTypeStr<T1>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T0>, PhantomToTypeStr<T1>];
  readonly $isPhantom = Balances.$isPhantom;

  readonly availableAmount: ToField<Balance<T1>>;
  readonly ctokenSupply: ToField<Supply<ToPhantom<CToken1<T0, T1>>>>;
  readonly fees: ToField<Balance<T1>>;
  readonly ctokenFees: ToField<Balance<ToPhantom<CToken1<T0, T1>>>>;
  readonly depositedCtokens: ToField<Balance<ToPhantom<CToken1<T0, T1>>>>;

  private constructor(
    typeArgs: [PhantomToTypeStr<T0>, PhantomToTypeStr<T1>],
    fields: BalancesFields<T0, T1>,
  ) {
    this.$fullTypeName = composeSuiType(
      Balances.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::reserve::Balances<${PhantomToTypeStr<T0>}, ${PhantomToTypeStr<T1>}>`;
    this.$typeArgs = typeArgs;

    this.availableAmount = fields.availableAmount;
    this.ctokenSupply = fields.ctokenSupply;
    this.fees = fields.fees;
    this.ctokenFees = fields.ctokenFees;
    this.depositedCtokens = fields.depositedCtokens;
  }

  static reified<
    T0 extends PhantomReified<PhantomTypeArgument>,
    T1 extends PhantomReified<PhantomTypeArgument>,
  >(
    T0: T0,
    T1: T1,
  ): BalancesReified<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> {
    return {
      typeName: Balances.$typeName,
      fullTypeName: composeSuiType(
        Balances.$typeName,
        ...[extractType(T0), extractType(T1)],
      ) as `${typeof PKG_V1}::reserve::Balances<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<T1>>}>`,
      typeArgs: [extractType(T0), extractType(T1)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<T0>>,
        PhantomToTypeStr<ToPhantomTypeArgument<T1>>,
      ],
      isPhantom: Balances.$isPhantom,
      reifiedTypeArgs: [T0, T1],
      fromFields: (fields: Record<string, any>) =>
        Balances.fromFields([T0, T1], fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        Balances.fromFieldsWithTypes([T0, T1], item),
      fromBcs: (data: Uint8Array) => Balances.fromBcs([T0, T1], data),
      bcs: Balances.bcs,
      fromJSONField: (field: any) => Balances.fromJSONField([T0, T1], field),
      fromJSON: (json: Record<string, any>) =>
        Balances.fromJSON([T0, T1], json),
      fromSuiParsedData: (content: SuiParsedData) =>
        Balances.fromSuiParsedData([T0, T1], content),
      fromSuiObjectData: (content: SuiObjectData) =>
        Balances.fromSuiObjectData([T0, T1], content),
      fetch: async (client: SuiClient, id: string) =>
        Balances.fetch(client, [T0, T1], id),
      new: (
        fields: BalancesFields<
          ToPhantomTypeArgument<T0>,
          ToPhantomTypeArgument<T1>
        >,
      ) => {
        return new Balances([extractType(T0), extractType(T1)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Balances.reified;
  }

  static phantom<
    T0 extends PhantomReified<PhantomTypeArgument>,
    T1 extends PhantomReified<PhantomTypeArgument>,
  >(
    T0: T0,
    T1: T1,
  ): PhantomReified<
    ToTypeStr<Balances<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>>>
  > {
    return phantom(Balances.reified(T0, T1));
  }
  static get p() {
    return Balances.phantom;
  }

  static get bcs() {
    return bcs.struct("Balances", {
      available_amount: Balance.bcs,
      ctoken_supply: Supply.bcs,
      fees: Balance.bcs,
      ctoken_fees: Balance.bcs,
      deposited_ctokens: Balance.bcs,
    });
  }

  static fromFields<
    T0 extends PhantomReified<PhantomTypeArgument>,
    T1 extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T0, T1],
    fields: Record<string, any>,
  ): Balances<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> {
    const [typeArg0, typeArg1] = typeArgs;
    return Balances.reified(typeArg0, typeArg1).new({
      availableAmount: decodeFromFields(
        Balance.reified(typeArg1),
        fields.available_amount,
      ),
      ctokenSupply: decodeFromFields(
        Supply.reified(reified.phantom(CToken1.reified(typeArg0, typeArg1))),
        fields.ctoken_supply,
      ),
      fees: decodeFromFields(Balance.reified(typeArg1), fields.fees),
      ctokenFees: decodeFromFields(
        Balance.reified(reified.phantom(CToken1.reified(typeArg0, typeArg1))),
        fields.ctoken_fees,
      ),
      depositedCtokens: decodeFromFields(
        Balance.reified(reified.phantom(CToken1.reified(typeArg0, typeArg1))),
        fields.deposited_ctokens,
      ),
    });
  }

  static fromFieldsWithTypes<
    T0 extends PhantomReified<PhantomTypeArgument>,
    T1 extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T0, T1],
    item: FieldsWithTypes,
  ): Balances<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> {
    if (!isBalances(item.type)) {
      throw new Error("not a Balances type");
    }
    const [typeArg0, typeArg1] = typeArgs;
    assertFieldsWithTypesArgsMatch(item, typeArgs);

    return Balances.reified(typeArg0, typeArg1).new({
      availableAmount: decodeFromFieldsWithTypes(
        Balance.reified(typeArg1),
        item.fields.available_amount,
      ),
      ctokenSupply: decodeFromFieldsWithTypes(
        Supply.reified(reified.phantom(CToken1.reified(typeArg0, typeArg1))),
        item.fields.ctoken_supply,
      ),
      fees: decodeFromFieldsWithTypes(
        Balance.reified(typeArg1),
        item.fields.fees,
      ),
      ctokenFees: decodeFromFieldsWithTypes(
        Balance.reified(reified.phantom(CToken1.reified(typeArg0, typeArg1))),
        item.fields.ctoken_fees,
      ),
      depositedCtokens: decodeFromFieldsWithTypes(
        Balance.reified(reified.phantom(CToken1.reified(typeArg0, typeArg1))),
        item.fields.deposited_ctokens,
      ),
    });
  }

  static fromBcs<
    T0 extends PhantomReified<PhantomTypeArgument>,
    T1 extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T0, T1],
    data: Uint8Array,
  ): Balances<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> {
    const [typeArg0, typeArg1] = typeArgs;
    return Balances.fromFields([typeArg0, typeArg1], Balances.bcs.parse(data));
  }

  toJSONField() {
    const [typeArg0, typeArg1] = this.$typeArgs;
    return {
      availableAmount: this.availableAmount.toJSONField(),
      ctokenSupply: this.ctokenSupply.toJSONField(),
      fees: this.fees.toJSONField(),
      ctokenFees: this.ctokenFees.toJSONField(),
      depositedCtokens: this.depositedCtokens.toJSONField(),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField<
    T0 extends PhantomReified<PhantomTypeArgument>,
    T1 extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T0, T1],
    field: any,
  ): Balances<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> {
    const [typeArg0, typeArg1] = typeArgs;
    return Balances.reified(typeArg0, typeArg1).new({
      availableAmount: decodeFromJSONField(
        Balance.reified(typeArg1),
        field.availableAmount,
      ),
      ctokenSupply: decodeFromJSONField(
        Supply.reified(reified.phantom(CToken1.reified(typeArg0, typeArg1))),
        field.ctokenSupply,
      ),
      fees: decodeFromJSONField(Balance.reified(typeArg1), field.fees),
      ctokenFees: decodeFromJSONField(
        Balance.reified(reified.phantom(CToken1.reified(typeArg0, typeArg1))),
        field.ctokenFees,
      ),
      depositedCtokens: decodeFromJSONField(
        Balance.reified(reified.phantom(CToken1.reified(typeArg0, typeArg1))),
        field.depositedCtokens,
      ),
    });
  }

  static fromJSON<
    T0 extends PhantomReified<PhantomTypeArgument>,
    T1 extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T0, T1],
    json: Record<string, any>,
  ): Balances<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> {
    if (json.$typeName !== Balances.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    const [typeArg0, typeArg1] = typeArgs;
    assertReifiedTypeArgsMatch(
      composeSuiType(
        Balances.$typeName,
        ...[typeArg0, typeArg1].map(extractType),
      ),
      json.$typeArgs,
      [typeArg0, typeArg1],
    );

    return Balances.fromJSONField([typeArg0, typeArg1], json);
  }

  static fromSuiParsedData<
    T0 extends PhantomReified<PhantomTypeArgument>,
    T1 extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T0, T1],
    content: SuiParsedData,
  ): Balances<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isBalances(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a Balances object`,
      );
    }
    return Balances.fromFieldsWithTypes(typeArgs, content);
  }

  static fromSuiObjectData<
    T0 extends PhantomReified<PhantomTypeArgument>,
    T1 extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T0, T1],
    data: SuiObjectData,
  ): Balances<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isBalances(data.bcs.type)) {
        throw new Error(`object at is not a Balances object`);
      }

      const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs;
      if (gotTypeArgs.length !== 2) {
        throw new Error(
          `type argument mismatch: expected 2 type arguments but got ${gotTypeArgs.length}`,
        );
      }
      gotTypeArgs.forEach((gotTypeArg, i) => {
        const compressedGotType = compressSuiType(gotTypeArg);
        const typeArg = typeArgs[i];
        if (!typeArg) {
          throw new Error(`missing type argument at position ${i}`);
        }
        const expectedTypeArg = compressSuiType(extractType(typeArg));
        if (compressedGotType !== expectedTypeArg) {
          throw new Error(
            `type argument mismatch at position ${i}: expected '${expectedTypeArg}' but got '${compressedGotType}'`,
          );
        }
      });

      return Balances.fromBcs(typeArgs, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return Balances.fromSuiParsedData(typeArgs, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<
    T0 extends PhantomReified<PhantomTypeArgument>,
    T1 extends PhantomReified<PhantomTypeArgument>,
  >(
    client: SuiClient,
    typeArgs: [T0, T1],
    id: string,
  ): Promise<Balances<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching Balances object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isBalances(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a Balances object`);
    }

    return Balances.fromSuiObjectData(typeArgs, res.data);
  }
}
