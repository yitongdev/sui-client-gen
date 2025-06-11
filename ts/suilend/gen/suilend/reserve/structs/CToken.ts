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

export function isCToken(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V1}::reserve::CToken` + "<");
}

export interface CTokenFields<
  T0 extends PhantomTypeArgument,
  T1 extends PhantomTypeArgument,
> {
  dummyField: ToField<"bool">;
}

export type CTokenReified<
  T0 extends PhantomTypeArgument,
  T1 extends PhantomTypeArgument,
> = Reified<CToken<T0, T1>, CTokenFields<T0, T1>>;

/**
 * Move struct: `CToken`
 * Module: `f95b06141ed4a174f239417323bde3f209b972f5930d8521ea38a52aff3a6ddf::reserve`
 *
 * @typeParam T0 - Type parameter 0 (phantom)
 * @typeParam T1 - Type parameter 1 (phantom)
 */
export class CToken<
  T0 extends PhantomTypeArgument,
  T1 extends PhantomTypeArgument,
> implements StructClass
{
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::reserve::CToken`;
  static readonly $numTypeParams = 2;
  static readonly $isPhantom = [true, true] as const;

  readonly $typeName = CToken.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::reserve::CToken<${PhantomToTypeStr<T0>}, ${PhantomToTypeStr<T1>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T0>, PhantomToTypeStr<T1>];
  readonly $isPhantom = CToken.$isPhantom;

  readonly dummyField: ToField<"bool">;

  private constructor(
    typeArgs: [PhantomToTypeStr<T0>, PhantomToTypeStr<T1>],
    fields: CTokenFields<T0, T1>,
  ) {
    this.$fullTypeName = composeSuiType(
      CToken.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::reserve::CToken<${PhantomToTypeStr<T0>}, ${PhantomToTypeStr<T1>}>`;
    this.$typeArgs = typeArgs;

    this.dummyField = fields.dummyField;
  }

  static reified<
    T0 extends PhantomReified<PhantomTypeArgument>,
    T1 extends PhantomReified<PhantomTypeArgument>,
  >(
    T0: T0,
    T1: T1,
  ): CTokenReified<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> {
    return {
      typeName: CToken.$typeName,
      fullTypeName: composeSuiType(
        CToken.$typeName,
        ...[extractType(T0), extractType(T1)],
      ) as `${typeof PKG_V1}::reserve::CToken<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}, ${PhantomToTypeStr<ToPhantomTypeArgument<T1>>}>`,
      typeArgs: [extractType(T0), extractType(T1)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<T0>>,
        PhantomToTypeStr<ToPhantomTypeArgument<T1>>,
      ],
      isPhantom: CToken.$isPhantom,
      reifiedTypeArgs: [T0, T1],
      fromFields: (fields: Record<string, any>) =>
        CToken.fromFields([T0, T1], fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        CToken.fromFieldsWithTypes([T0, T1], item),
      fromBcs: (data: Uint8Array) => CToken.fromBcs([T0, T1], data),
      bcs: CToken.bcs,
      fromJSONField: (field: any) => CToken.fromJSONField([T0, T1], field),
      fromJSON: (json: Record<string, any>) => CToken.fromJSON([T0, T1], json),
      fromSuiParsedData: (content: SuiParsedData) =>
        CToken.fromSuiParsedData([T0, T1], content),
      fromSuiObjectData: (content: SuiObjectData) =>
        CToken.fromSuiObjectData([T0, T1], content),
      fetch: async (client: SuiClient, id: string) =>
        CToken.fetch(client, [T0, T1], id),
      new: (
        fields: CTokenFields<
          ToPhantomTypeArgument<T0>,
          ToPhantomTypeArgument<T1>
        >,
      ) => {
        return new CToken([extractType(T0), extractType(T1)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return CToken.reified;
  }

  static phantom<
    T0 extends PhantomReified<PhantomTypeArgument>,
    T1 extends PhantomReified<PhantomTypeArgument>,
  >(
    T0: T0,
    T1: T1,
  ): PhantomReified<
    ToTypeStr<CToken<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>>>
  > {
    return phantom(CToken.reified(T0, T1));
  }
  static get p() {
    return CToken.phantom;
  }

  static get bcs() {
    return bcs.struct("CToken", {
      dummy_field: bcs.bool(),
    });
  }

  static fromFields<
    T0 extends PhantomReified<PhantomTypeArgument>,
    T1 extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T0, T1],
    fields: Record<string, any>,
  ): CToken<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> {
    const [typeArg0, typeArg1] = typeArgs;
    return CToken.reified(typeArg0, typeArg1).new({
      dummyField: decodeFromFields("bool", fields.dummy_field),
    });
  }

  static fromFieldsWithTypes<
    T0 extends PhantomReified<PhantomTypeArgument>,
    T1 extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T0, T1],
    item: FieldsWithTypes,
  ): CToken<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> {
    if (!isCToken(item.type)) {
      throw new Error("not a CToken type");
    }
    const [typeArg0, typeArg1] = typeArgs;
    assertFieldsWithTypesArgsMatch(item, typeArgs);

    return CToken.reified(typeArg0, typeArg1).new({
      dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field),
    });
  }

  static fromBcs<
    T0 extends PhantomReified<PhantomTypeArgument>,
    T1 extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T0, T1],
    data: Uint8Array,
  ): CToken<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> {
    const [typeArg0, typeArg1] = typeArgs;
    return CToken.fromFields([typeArg0, typeArg1], CToken.bcs.parse(data));
  }

  toJSONField() {
    const [typeArg0, typeArg1] = this.$typeArgs;
    return {
      dummyField: this.dummyField,
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
  ): CToken<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> {
    const [typeArg0, typeArg1] = typeArgs;
    return CToken.reified(typeArg0, typeArg1).new({
      dummyField: decodeFromJSONField("bool", field.dummyField),
    });
  }

  static fromJSON<
    T0 extends PhantomReified<PhantomTypeArgument>,
    T1 extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T0, T1],
    json: Record<string, any>,
  ): CToken<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> {
    if (json.$typeName !== CToken.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    const [typeArg0, typeArg1] = typeArgs;
    assertReifiedTypeArgsMatch(
      composeSuiType(
        CToken.$typeName,
        ...[typeArg0, typeArg1].map(extractType),
      ),
      json.$typeArgs,
      [typeArg0, typeArg1],
    );

    return CToken.fromJSONField([typeArg0, typeArg1], json);
  }

  static fromSuiParsedData<
    T0 extends PhantomReified<PhantomTypeArgument>,
    T1 extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T0, T1],
    content: SuiParsedData,
  ): CToken<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isCToken(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a CToken object`,
      );
    }
    return CToken.fromFieldsWithTypes(typeArgs, content);
  }

  static fromSuiObjectData<
    T0 extends PhantomReified<PhantomTypeArgument>,
    T1 extends PhantomReified<PhantomTypeArgument>,
  >(
    typeArgs: [T0, T1],
    data: SuiObjectData,
  ): CToken<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isCToken(data.bcs.type)) {
        throw new Error(`object at is not a CToken object`);
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

      return CToken.fromBcs(typeArgs, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return CToken.fromSuiParsedData(typeArgs, data.content);
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
  ): Promise<CToken<ToPhantomTypeArgument<T0>, ToPhantomTypeArgument<T1>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching CToken object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isCToken(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a CToken object`);
    }

    return CToken.fromSuiObjectData(typeArgs, res.data);
  }
}
