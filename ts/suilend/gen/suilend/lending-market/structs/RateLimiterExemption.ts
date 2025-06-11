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
} from "../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
  parseTypeName,
} from "../../../_framework/util.js";
import { PKG_V1 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isRateLimiterExemption(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(
    `${PKG_V1}::lending_market::RateLimiterExemption` + "<",
  );
}

export interface RateLimiterExemptionFields<
  T0 extends PhantomTypeArgument,
  T1 extends PhantomTypeArgument,
> {
  amount: ToField<"u64">;
}

export type RateLimiterExemptionReified<
  T0 extends PhantomTypeArgument,
  T1 extends PhantomTypeArgument,
> = Reified<RateLimiterExemption<T0, T1>, RateLimiterExemptionFields<T0, T1>>;

/**
 * Move struct: `RateLimiterExemption`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::lending_market`
 *
 * @typeParam T0 - Type parameter 0 (phantom)
 * @typeParam T1 - Type parameter 1 (phantom)
 */
export class RateLimiterExemption<
  T0 extends PhantomTypeArgument,
  T1 extends PhantomTypeArgument,
> implements StructClass
{
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::lending_market::RateLimiterExemption`;
  static readonly $numTypeParams = 2;
  static readonly $isPhantom = [true, true] as const;

  readonly $typeName = RateLimiterExemption.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::lending_market::RateLimiterExemption<${PhantomToTypeStr<T0>}, ${PhantomToTypeStr<T1>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T0>, PhantomToTypeStr<T1>];
  readonly $isPhantom = RateLimiterExemption.$isPhantom;

  readonly amount: ToField<"u64">;

  private constructor(
    typeArgs: [PhantomToTypeStr<T0>, PhantomToTypeStr<T1>],
    fields: RateLimiterExemptionFields<T0, T1>,
  ) {
    this.$fullTypeName = composeSuiType(
      RateLimiterExemption.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::lending_market::RateLimiterExemption<${PhantomToTypeStr<T0>}, ${PhantomToTypeStr<T1>}>`;
    this.$typeArgs = typeArgs;

    this.amount = fields.amount;
  }

  static reified<
    T0 extends PhantomReified<PhantomTypeArgument>,
    T1 extends PhantomReified<PhantomTypeArgument>,
  >(
    T0: T0,
    T1: T1,
  ): RateLimiterExemptionReified<
    ToPhantomTypeArgument<T0>,
    ToPhantomTypeArgument<T1>
  > {
    return {
      typeName: RateLimiterExemption.$typeName,
      fullTypeName: composeSuiType(
        RateLimiterExemption.$typeName,
        ...[extractType(T0), extractType(T1)],
      ) as `${typeof PKG_V1}::lending_market::RateLimiterExemption<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<T1>>}>`,
      typeArgs: [extractType(T0), extractType(T1)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<T0>>,
        PhantomToTypeStr<ToPhantomTypeArgument<T1>>,
      ],
      isPhantom: RateLimiterExemption.$isPhantom,
      reifiedTypeArgs: [T0, T1],
      fromFields: (fields: Record<string, any>) =>
        RateLimiterExemption.fromFields([T0, T1], fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        RateLimiterExemption.fromFieldsWithTypes([T0, T1], item),
      fromBcs: (data: Uint8Array) =>
        RateLimiterExemption.fromBcs([T0, T1], data),
      bcs: RateLimiterExemption.bcs,
      fromJSONField: (field: any) =>
        RateLimiterExemption.fromJSONField([T0, T1], field),
      fromJSON: (json: Record<string, any>) =>
        RateLimiterExemption.fromJSON([T0, T1], json),
      fromSuiParsedData: (content: SuiParsedData) =>
        RateLimiterExemption.fromSuiParsedData([T0, T1], content),
      fromSuiObjectData: (content: SuiObjectData) =>
        RateLimiterExemption.fromSuiObjectData([T0, T1], content),
      fetch: async (client: SuiClient, id: string) =>
        RateLimiterExemption.fetch(client, [T0, T1], id),
      new: (
        fields: RateLimiterExemptionFields<
          ToPhantomTypeArgument<T0>,
          ToPhantomTypeArgument<T1>
        >,
      ) => {
        return new RateLimiterExemption(
          [extractType(T0), extractType(T1)],
          fields,
        );
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return RateLimiterExemption.reified;
  }

  static phantom<
    T0 extends PhantomReified<PhantomTypeArgument>,
    T1 extends PhantomReified<PhantomTypeArgument>,
  >(
    T0: T0,
    T1: T1,
  ): PhantomReified<
    ToTypeStr<
      RateLimiterExemption<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>>
    >
  > {
    return phantom(RateLimiterExemption.reified(T0, T1));
  }
  static get p() {
    return RateLimiterExemption.phantom;
  }

  static get bcs() {
    return bcs.struct("RateLimiterExemption", {
      amount: bcs.u64(),
    });
  }

  static fromFields<
    T0 extends PhantomReified<PhantomTypeArgument>,
    T1 extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T0, T1],
    fields: Record<string, any>,
  ): RateLimiterExemption<
    ToPhantomTypeArgument<T0>,
    ToPhantomTypeArgument<T1>
  > {
    const [typeArg0, typeArg1] = typeArgs;
    return RateLimiterExemption.reified(typeArg0, typeArg1).new({
      amount: decodeFromFields("u64", fields.amount),
    });
  }

  static fromFieldsWithTypes<
    T0 extends PhantomReified<PhantomTypeArgument>,
    T1 extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T0, T1],
    item: FieldsWithTypes,
  ): RateLimiterExemption<
    ToPhantomTypeArgument<T0>,
    ToPhantomTypeArgument<T1>
  > {
    if (!isRateLimiterExemption(item.type)) {
      throw new Error("not a RateLimiterExemption type");
    }
    const [typeArg0, typeArg1] = typeArgs;
    assertFieldsWithTypesArgsMatch(item, typeArgs);

    return RateLimiterExemption.reified(typeArg0, typeArg1).new({
      amount: decodeFromFieldsWithTypes("u64", item.fields.amount),
    });
  }

  static fromBcs<
    T0 extends PhantomReified<PhantomTypeArgument>,
    T1 extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T0, T1],
    data: Uint8Array,
  ): RateLimiterExemption<
    ToPhantomTypeArgument<T0>,
    ToPhantomTypeArgument<T1>
  > {
    const [typeArg0, typeArg1] = typeArgs;
    return RateLimiterExemption.fromFields(
      [typeArg0, typeArg1],
      RateLimiterExemption.bcs.parse(data),
    );
  }

  toJSONField() {
    const [typeArg0, typeArg1] = this.$typeArgs;
    return {
      amount: this.amount.toString(),
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
  ): RateLimiterExemption<
    ToPhantomTypeArgument<T0>,
    ToPhantomTypeArgument<T1>
  > {
    const [typeArg0, typeArg1] = typeArgs;
    return RateLimiterExemption.reified(typeArg0, typeArg1).new({
      amount: decodeFromJSONField("u64", field.amount),
    });
  }

  static fromJSON<
    T0 extends PhantomReified<PhantomTypeArgument>,
    T1 extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T0, T1],
    json: Record<string, any>,
  ): RateLimiterExemption<
    ToPhantomTypeArgument<T0>,
    ToPhantomTypeArgument<T1>
  > {
    if (json.$typeName !== RateLimiterExemption.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    const [typeArg0, typeArg1] = typeArgs;
    assertReifiedTypeArgsMatch(
      composeSuiType(
        RateLimiterExemption.$typeName,
        ...[typeArg0, typeArg1].map(extractType),
      ),
      json.$typeArgs,
      [typeArg0, typeArg1],
    );

    return RateLimiterExemption.fromJSONField([typeArg0, typeArg1], json);
  }

  static fromSuiParsedData<
    T0 extends PhantomReified<PhantomTypeArgument>,
    T1 extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T0, T1],
    content: SuiParsedData,
  ): RateLimiterExemption<
    ToPhantomTypeArgument<T0>,
    ToPhantomTypeArgument<T1>
  > {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isRateLimiterExemption(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a RateLimiterExemption object`,
      );
    }
    return RateLimiterExemption.fromFieldsWithTypes(typeArgs, content);
  }

  static fromSuiObjectData<
    T0 extends PhantomReified<PhantomTypeArgument>,
    T1 extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T0, T1],
    data: SuiObjectData,
  ): RateLimiterExemption<
    ToPhantomTypeArgument<T0>,
    ToPhantomTypeArgument<T1>
  > {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isRateLimiterExemption(data.bcs.type)
      ) {
        throw new Error(`object at is not a RateLimiterExemption object`);
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

      return RateLimiterExemption.fromBcs(
        typeArgs,
        fromBase64(data.bcs.bcsBytes),
      );
    }
    if (data.content) {
      return RateLimiterExemption.fromSuiParsedData(typeArgs, data.content);
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
  ): Promise<
    RateLimiterExemption<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>>
  > {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching RateLimiterExemption object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isRateLimiterExemption(res.data.bcs.type)
    ) {
      throw new Error(
        `object at id ${id} is not a RateLimiterExemption object`,
      );
    }

    return RateLimiterExemption.fromSuiObjectData(typeArgs, res.data);
  }
}
