import {
  PhantomReified,
  Reified,
  StructClass,
  ToField,
  ToTypeArgument,
  ToTypeStr,
  TypeArgument,
  assertFieldsWithTypesArgsMatch,
  assertReifiedTypeArgsMatch,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  extractType,
  fieldToJSON,
  phantom,
  toBcs,
} from "../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
  parseTypeName,
} from "../../../_framework/util.js";
import { UID } from "../../../sui-chain/object/structs/index.js";
import { PKG_V1 } from "../../constants.js";
import { BcsType, bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isWithSpecialTypesAsGenerics(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V1}::fixture::WithSpecialTypesAsGenerics` + "<");
}

export interface WithSpecialTypesAsGenericsFields<
  T0 extends TypeArgument,
  T1 extends TypeArgument,
  T2 extends TypeArgument,
  T3 extends TypeArgument,
  T4 extends TypeArgument,
  T5 extends TypeArgument,
  T6 extends TypeArgument,
  T7 extends TypeArgument,
> {
  id: ToField<UID>;
  string: ToField<T0>;
  asciiString: ToField<T1>;
  url: ToField<T2>;
  idField: ToField<T3>;
  uid: ToField<T4>;
  balance: ToField<T5>;
  option: ToField<T6>;
  optionNone: ToField<T7>;
}

export type WithSpecialTypesAsGenericsReified<
  T0 extends TypeArgument,
  T1 extends TypeArgument,
  T2 extends TypeArgument,
  T3 extends TypeArgument,
  T4 extends TypeArgument,
  T5 extends TypeArgument,
  T6 extends TypeArgument,
  T7 extends TypeArgument,
> = Reified<
  WithSpecialTypesAsGenerics<T0, T1, T2, T3, T4, T5, T6, T7>,
  WithSpecialTypesAsGenericsFields<T0, T1, T2, T3, T4, T5, T6, T7>
>;

/**
 * Move struct: `WithSpecialTypesAsGenerics`
 * Module: `8b699fdce543505aeb290ee1b6b5d20fcaa8e8b1a5fc137a8b3facdfa2902209::fixture`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 * @typeParam T2 - Type parameter 2
 * @typeParam T3 - Type parameter 3
 * @typeParam T4 - Type parameter 4
 * @typeParam T5 - Type parameter 5
 * @typeParam T6 - Type parameter 6
 * @typeParam T7 - Type parameter 7
 */
export class WithSpecialTypesAsGenerics<
  T0 extends TypeArgument,
  T1 extends TypeArgument,
  T2 extends TypeArgument,
  T3 extends TypeArgument,
  T4 extends TypeArgument,
  T5 extends TypeArgument,
  T6 extends TypeArgument,
  T7 extends TypeArgument,
> implements StructClass
{
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::fixture::WithSpecialTypesAsGenerics`;
  static readonly $numTypeParams = 8;
  static readonly $isPhantom = [false, false, false, false, false, false, false, false] as const;

  readonly $typeName = WithSpecialTypesAsGenerics.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::fixture::WithSpecialTypesAsGenerics<${ToTypeStr<T0>}, ${ToTypeStr<T1>}, ${ToTypeStr<T2>}, ${ToTypeStr<T3>}, ${ToTypeStr<T4>}, ${ToTypeStr<T5>}, ${ToTypeStr<T6>}, ${ToTypeStr<T7>}>`;
  readonly $typeArgs: [
    ToTypeStr<T0>,
    ToTypeStr<T1>,
    ToTypeStr<T2>,
    ToTypeStr<T3>,
    ToTypeStr<T4>,
    ToTypeStr<T5>,
    ToTypeStr<T6>,
    ToTypeStr<T7>,
  ];
  readonly $isPhantom = WithSpecialTypesAsGenerics.$isPhantom;

  readonly id: ToField<UID>;
  readonly string: ToField<T0>;
  readonly asciiString: ToField<T1>;
  readonly url: ToField<T2>;
  readonly idField: ToField<T3>;
  readonly uid: ToField<T4>;
  readonly balance: ToField<T5>;
  readonly option: ToField<T6>;
  readonly optionNone: ToField<T7>;

  private constructor(
    typeArgs: [
      ToTypeStr<T0>,
      ToTypeStr<T1>,
      ToTypeStr<T2>,
      ToTypeStr<T3>,
      ToTypeStr<T4>,
      ToTypeStr<T5>,
      ToTypeStr<T6>,
      ToTypeStr<T7>,
    ],
    fields: WithSpecialTypesAsGenericsFields<T0, T1, T2, T3, T4, T5, T6, T7>,
  ) {
    this.$fullTypeName = composeSuiType(
      WithSpecialTypesAsGenerics.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::fixture::WithSpecialTypesAsGenerics<${ToTypeStr<T0>}, ${ToTypeStr<T1>}, ${ToTypeStr<T2>}, ${ToTypeStr<T3>}, ${ToTypeStr<T4>}, ${ToTypeStr<T5>}, ${ToTypeStr<T6>}, ${ToTypeStr<T7>}>`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.string = fields.string;
    this.asciiString = fields.asciiString;
    this.url = fields.url;
    this.idField = fields.idField;
    this.uid = fields.uid;
    this.balance = fields.balance;
    this.option = fields.option;
    this.optionNone = fields.optionNone;
  }

  static reified<
    T0 extends Reified<TypeArgument, any>,
    T1 extends Reified<TypeArgument, any>,
    T2 extends Reified<TypeArgument, any>,
    T3 extends Reified<TypeArgument, any>,
    T4 extends Reified<TypeArgument, any>,
    T5 extends Reified<TypeArgument, any>,
    T6 extends Reified<TypeArgument, any>,
    T7 extends Reified<TypeArgument, any>,
  >(
    T0: T0,
    T1: T1,
    T2: T2,
    T3: T3,
    T4: T4,
    T5: T5,
    T6: T6,
    T7: T7,
  ): WithSpecialTypesAsGenericsReified<
    ToTypeArgument<T0>,
    ToTypeArgument<T1>,
    ToTypeArgument<T2>,
    ToTypeArgument<T3>,
    ToTypeArgument<T4>,
    ToTypeArgument<T5>,
    ToTypeArgument<T6>,
    ToTypeArgument<T7>
  > {
    return {
      typeName: WithSpecialTypesAsGenerics.$typeName,
      fullTypeName: composeSuiType(
        WithSpecialTypesAsGenerics.$typeName,
        ...[
          extractType(T0),
          extractType(T1),
          extractType(T2),
          extractType(T3),
          extractType(T4),
          extractType(T5),
          extractType(T6),
          extractType(T7),
        ],
      ) as `${typeof PKG_V1}::fixture::WithSpecialTypesAsGenerics<${ToTypeStr<ToTypeArgument<T0>>}, ${ToTypeStr<ToTypeArgument<T1>>}, ${ToTypeStr<ToTypeArgument<T2>>}, ${ToTypeStr<ToTypeArgument<T3>>}, ${ToTypeStr<ToTypeArgument<T4>>}, ${ToTypeStr<ToTypeArgument<T5>>}, ${ToTypeStr<ToTypeArgument<T6>>}, ${ToTypeStr<ToTypeArgument<T7>>}>`,
      typeArgs: [
        extractType(T0),
        extractType(T1),
        extractType(T2),
        extractType(T3),
        extractType(T4),
        extractType(T5),
        extractType(T6),
        extractType(T7),
      ] as [
        ToTypeStr<ToTypeArgument<T0>>,
        ToTypeStr<ToTypeArgument<T1>>,
        ToTypeStr<ToTypeArgument<T2>>,
        ToTypeStr<ToTypeArgument<T3>>,
        ToTypeStr<ToTypeArgument<T4>>,
        ToTypeStr<ToTypeArgument<T5>>,
        ToTypeStr<ToTypeArgument<T6>>,
        ToTypeStr<ToTypeArgument<T7>>,
      ],
      isPhantom: WithSpecialTypesAsGenerics.$isPhantom,
      reifiedTypeArgs: [T0, T1, T2, T3, T4, T5, T6, T7],
      fromFields: (fields: Record<string, any>) =>
        WithSpecialTypesAsGenerics.fromFields([T0, T1, T2, T3, T4, T5, T6, T7], fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        WithSpecialTypesAsGenerics.fromFieldsWithTypes([T0, T1, T2, T3, T4, T5, T6, T7], item),
      fromBcs: (data: Uint8Array) =>
        WithSpecialTypesAsGenerics.fromBcs([T0, T1, T2, T3, T4, T5, T6, T7], data),
      bcs: WithSpecialTypesAsGenerics.bcs(
        toBcs(T0),
        toBcs(T1),
        toBcs(T2),
        toBcs(T3),
        toBcs(T4),
        toBcs(T5),
        toBcs(T6),
        toBcs(T7),
      ),
      fromJSONField: (field: any) =>
        WithSpecialTypesAsGenerics.fromJSONField([T0, T1, T2, T3, T4, T5, T6, T7], field),
      fromJSON: (json: Record<string, any>) =>
        WithSpecialTypesAsGenerics.fromJSON([T0, T1, T2, T3, T4, T5, T6, T7], json),
      fromSuiParsedData: (content: SuiParsedData) =>
        WithSpecialTypesAsGenerics.fromSuiParsedData([T0, T1, T2, T3, T4, T5, T6, T7], content),
      fromSuiObjectData: (content: SuiObjectData) =>
        WithSpecialTypesAsGenerics.fromSuiObjectData([T0, T1, T2, T3, T4, T5, T6, T7], content),
      fetch: async (client: SuiClient, id: string) =>
        WithSpecialTypesAsGenerics.fetch(client, [T0, T1, T2, T3, T4, T5, T6, T7], id),
      new: (
        fields: WithSpecialTypesAsGenericsFields<
          ToTypeArgument<T0>,
          ToTypeArgument<T1>,
          ToTypeArgument<T2>,
          ToTypeArgument<T3>,
          ToTypeArgument<T4>,
          ToTypeArgument<T5>,
          ToTypeArgument<T6>,
          ToTypeArgument<T7>
        >,
      ) => {
        return new WithSpecialTypesAsGenerics(
          [
            extractType(T0),
            extractType(T1),
            extractType(T2),
            extractType(T3),
            extractType(T4),
            extractType(T5),
            extractType(T6),
            extractType(T7),
          ],
          fields,
        );
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return WithSpecialTypesAsGenerics.reified;
  }

  static phantom<
    T0 extends Reified<TypeArgument, any>,
    T1 extends Reified<TypeArgument, any>,
    T2 extends Reified<TypeArgument, any>,
    T3 extends Reified<TypeArgument, any>,
    T4 extends Reified<TypeArgument, any>,
    T5 extends Reified<TypeArgument, any>,
    T6 extends Reified<TypeArgument, any>,
    T7 extends Reified<TypeArgument, any>,
  >(
    T0: T0,
    T1: T1,
    T2: T2,
    T3: T3,
    T4: T4,
    T5: T5,
    T6: T6,
    T7: T7,
  ): PhantomReified<
    ToTypeStr<
      WithSpecialTypesAsGenerics<
        ToTypeArgument<T0>,
        ToTypeArgument<T1>,
        ToTypeArgument<T2>,
        ToTypeArgument<T3>,
        ToTypeArgument<T4>,
        ToTypeArgument<T5>,
        ToTypeArgument<T6>,
        ToTypeArgument<T7>
      >
    >
  > {
    return phantom(WithSpecialTypesAsGenerics.reified(T0, T1, T2, T3, T4, T5, T6, T7));
  }
  static get p() {
    return WithSpecialTypesAsGenerics.phantom;
  }

  static get bcs() {
    return <
      T0 extends BcsType<any>,
      T1 extends BcsType<any>,
      T2 extends BcsType<any>,
      T3 extends BcsType<any>,
      T4 extends BcsType<any>,
      T5 extends BcsType<any>,
      T6 extends BcsType<any>,
      T7 extends BcsType<any>,
    >(
      T0: T0,
      T1: T1,
      T2: T2,
      T3: T3,
      T4: T4,
      T5: T5,
      T6: T6,
      T7: T7,
    ) =>
      bcs.struct(
        `WithSpecialTypesAsGenerics<${T0.name}, ${T1.name}, ${T2.name}, ${T3.name}, ${T4.name}, ${T5.name}, ${T6.name}, ${T7.name}>`,
        {
          id: UID.bcs,
          string: T0,
          ascii_string: T1,
          url: T2,
          id_field: T3,
          uid: T4,
          balance: T5,
          option: T6,
          option_none: T7,
        },
      );
  }

  static fromFields<
    T0 extends Reified<TypeArgument, any>,
    T1 extends Reified<TypeArgument, any>,
    T2 extends Reified<TypeArgument, any>,
    T3 extends Reified<TypeArgument, any>,
    T4 extends Reified<TypeArgument, any>,
    T5 extends Reified<TypeArgument, any>,
    T6 extends Reified<TypeArgument, any>,
    T7 extends Reified<TypeArgument, any>,
  >(
    typeArgs: [T0, T1, T2, T3, T4, T5, T6, T7],
    fields: Record<string, any>,
  ): WithSpecialTypesAsGenerics<
    ToTypeArgument<T0>,
    ToTypeArgument<T1>,
    ToTypeArgument<T2>,
    ToTypeArgument<T3>,
    ToTypeArgument<T4>,
    ToTypeArgument<T5>,
    ToTypeArgument<T6>,
    ToTypeArgument<T7>
  > {
    const [typeArg0, typeArg1, typeArg2, typeArg3, typeArg4, typeArg5, typeArg6, typeArg7] =
      typeArgs;
    return WithSpecialTypesAsGenerics.reified(
      typeArg0,
      typeArg1,
      typeArg2,
      typeArg3,
      typeArg4,
      typeArg5,
      typeArg6,
      typeArg7,
    ).new({
      id: decodeFromFields(UID.reified(), fields.id),
      string: decodeFromFields(typeArg0, fields.string),
      asciiString: decodeFromFields(typeArg1, fields.ascii_string),
      url: decodeFromFields(typeArg2, fields.url),
      idField: decodeFromFields(typeArg3, fields.id_field),
      uid: decodeFromFields(typeArg4, fields.uid),
      balance: decodeFromFields(typeArg5, fields.balance),
      option: decodeFromFields(typeArg6, fields.option),
      optionNone: decodeFromFields(typeArg7, fields.option_none),
    });
  }

  static fromFieldsWithTypes<
    T0 extends Reified<TypeArgument, any>,
    T1 extends Reified<TypeArgument, any>,
    T2 extends Reified<TypeArgument, any>,
    T3 extends Reified<TypeArgument, any>,
    T4 extends Reified<TypeArgument, any>,
    T5 extends Reified<TypeArgument, any>,
    T6 extends Reified<TypeArgument, any>,
    T7 extends Reified<TypeArgument, any>,
  >(
    typeArgs: [T0, T1, T2, T3, T4, T5, T6, T7],
    item: FieldsWithTypes,
  ): WithSpecialTypesAsGenerics<
    ToTypeArgument<T0>,
    ToTypeArgument<T1>,
    ToTypeArgument<T2>,
    ToTypeArgument<T3>,
    ToTypeArgument<T4>,
    ToTypeArgument<T5>,
    ToTypeArgument<T6>,
    ToTypeArgument<T7>
  > {
    if (!isWithSpecialTypesAsGenerics(item.type)) {
      throw new Error("not a WithSpecialTypesAsGenerics type");
    }
    const [typeArg0, typeArg1, typeArg2, typeArg3, typeArg4, typeArg5, typeArg6, typeArg7] =
      typeArgs;
    assertFieldsWithTypesArgsMatch(item, typeArgs);

    return WithSpecialTypesAsGenerics.reified(
      typeArg0,
      typeArg1,
      typeArg2,
      typeArg3,
      typeArg4,
      typeArg5,
      typeArg6,
      typeArg7,
    ).new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      string: decodeFromFieldsWithTypes(typeArg0, item.fields.string),
      asciiString: decodeFromFieldsWithTypes(typeArg1, item.fields.ascii_string),
      url: decodeFromFieldsWithTypes(typeArg2, item.fields.url),
      idField: decodeFromFieldsWithTypes(typeArg3, item.fields.id_field),
      uid: decodeFromFieldsWithTypes(typeArg4, item.fields.uid),
      balance: decodeFromFieldsWithTypes(typeArg5, item.fields.balance),
      option: decodeFromFieldsWithTypes(typeArg6, item.fields.option),
      optionNone: decodeFromFieldsWithTypes(typeArg7, item.fields.option_none),
    });
  }

  static fromBcs<
    T0 extends Reified<TypeArgument, any>,
    T1 extends Reified<TypeArgument, any>,
    T2 extends Reified<TypeArgument, any>,
    T3 extends Reified<TypeArgument, any>,
    T4 extends Reified<TypeArgument, any>,
    T5 extends Reified<TypeArgument, any>,
    T6 extends Reified<TypeArgument, any>,
    T7 extends Reified<TypeArgument, any>,
  >(
    typeArgs: [T0, T1, T2, T3, T4, T5, T6, T7],
    data: Uint8Array,
  ): WithSpecialTypesAsGenerics<
    ToTypeArgument<T0>,
    ToTypeArgument<T1>,
    ToTypeArgument<T2>,
    ToTypeArgument<T3>,
    ToTypeArgument<T4>,
    ToTypeArgument<T5>,
    ToTypeArgument<T6>,
    ToTypeArgument<T7>
  > {
    const [typeArg0, typeArg1, typeArg2, typeArg3, typeArg4, typeArg5, typeArg6, typeArg7] =
      typeArgs;
    return WithSpecialTypesAsGenerics.fromFields(
      [typeArg0, typeArg1, typeArg2, typeArg3, typeArg4, typeArg5, typeArg6, typeArg7],
      WithSpecialTypesAsGenerics.bcs(
        toBcs(typeArg0),
        toBcs(typeArg1),
        toBcs(typeArg2),
        toBcs(typeArg3),
        toBcs(typeArg4),
        toBcs(typeArg5),
        toBcs(typeArg6),
        toBcs(typeArg7),
      ).parse(data),
    );
  }

  toJSONField() {
    const [typeArg0, typeArg1, typeArg2, typeArg3, typeArg4, typeArg5, typeArg6, typeArg7] =
      this.$typeArgs;
    return {
      id: this.id,
      string: fieldToJSON<T0>(typeArg0, this.string),
      asciiString: fieldToJSON<T1>(typeArg1, this.asciiString),
      url: fieldToJSON<T2>(typeArg2, this.url),
      idField: fieldToJSON<T3>(typeArg3, this.idField),
      uid: fieldToJSON<T4>(typeArg4, this.uid),
      balance: fieldToJSON<T5>(typeArg5, this.balance),
      option: fieldToJSON<T6>(typeArg6, this.option),
      optionNone: fieldToJSON<T7>(typeArg7, this.optionNone),
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField<
    T0 extends Reified<TypeArgument, any>,
    T1 extends Reified<TypeArgument, any>,
    T2 extends Reified<TypeArgument, any>,
    T3 extends Reified<TypeArgument, any>,
    T4 extends Reified<TypeArgument, any>,
    T5 extends Reified<TypeArgument, any>,
    T6 extends Reified<TypeArgument, any>,
    T7 extends Reified<TypeArgument, any>,
  >(
    typeArgs: [T0, T1, T2, T3, T4, T5, T6, T7],
    field: any,
  ): WithSpecialTypesAsGenerics<
    ToTypeArgument<T0>,
    ToTypeArgument<T1>,
    ToTypeArgument<T2>,
    ToTypeArgument<T3>,
    ToTypeArgument<T4>,
    ToTypeArgument<T5>,
    ToTypeArgument<T6>,
    ToTypeArgument<T7>
  > {
    const [typeArg0, typeArg1, typeArg2, typeArg3, typeArg4, typeArg5, typeArg6, typeArg7] =
      typeArgs;
    return WithSpecialTypesAsGenerics.reified(
      typeArg0,
      typeArg1,
      typeArg2,
      typeArg3,
      typeArg4,
      typeArg5,
      typeArg6,
      typeArg7,
    ).new({
      id: decodeFromJSONField(UID.reified(), field.id),
      string: decodeFromJSONField(typeArg0, field.string),
      asciiString: decodeFromJSONField(typeArg1, field.asciiString),
      url: decodeFromJSONField(typeArg2, field.url),
      idField: decodeFromJSONField(typeArg3, field.idField),
      uid: decodeFromJSONField(typeArg4, field.uid),
      balance: decodeFromJSONField(typeArg5, field.balance),
      option: decodeFromJSONField(typeArg6, field.option),
      optionNone: decodeFromJSONField(typeArg7, field.optionNone),
    });
  }

  static fromJSON<
    T0 extends Reified<TypeArgument, any>,
    T1 extends Reified<TypeArgument, any>,
    T2 extends Reified<TypeArgument, any>,
    T3 extends Reified<TypeArgument, any>,
    T4 extends Reified<TypeArgument, any>,
    T5 extends Reified<TypeArgument, any>,
    T6 extends Reified<TypeArgument, any>,
    T7 extends Reified<TypeArgument, any>,
  >(
    typeArgs: [T0, T1, T2, T3, T4, T5, T6, T7],
    json: Record<string, any>,
  ): WithSpecialTypesAsGenerics<
    ToTypeArgument<T0>,
    ToTypeArgument<T1>,
    ToTypeArgument<T2>,
    ToTypeArgument<T3>,
    ToTypeArgument<T4>,
    ToTypeArgument<T5>,
    ToTypeArgument<T6>,
    ToTypeArgument<T7>
  > {
    if (json.$typeName !== WithSpecialTypesAsGenerics.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    const [typeArg0, typeArg1, typeArg2, typeArg3, typeArg4, typeArg5, typeArg6, typeArg7] =
      typeArgs;
    assertReifiedTypeArgsMatch(
      composeSuiType(
        WithSpecialTypesAsGenerics.$typeName,
        ...[typeArg0, typeArg1, typeArg2, typeArg3, typeArg4, typeArg5, typeArg6, typeArg7].map(
          extractType,
        ),
      ),
      json.$typeArgs,
      [typeArg0, typeArg1, typeArg2, typeArg3, typeArg4, typeArg5, typeArg6, typeArg7],
    );

    return WithSpecialTypesAsGenerics.fromJSONField(
      [typeArg0, typeArg1, typeArg2, typeArg3, typeArg4, typeArg5, typeArg6, typeArg7],
      json,
    );
  }

  static fromSuiParsedData<
    T0 extends Reified<TypeArgument, any>,
    T1 extends Reified<TypeArgument, any>,
    T2 extends Reified<TypeArgument, any>,
    T3 extends Reified<TypeArgument, any>,
    T4 extends Reified<TypeArgument, any>,
    T5 extends Reified<TypeArgument, any>,
    T6 extends Reified<TypeArgument, any>,
    T7 extends Reified<TypeArgument, any>,
  >(
    typeArgs: [T0, T1, T2, T3, T4, T5, T6, T7],
    content: SuiParsedData,
  ): WithSpecialTypesAsGenerics<
    ToTypeArgument<T0>,
    ToTypeArgument<T1>,
    ToTypeArgument<T2>,
    ToTypeArgument<T3>,
    ToTypeArgument<T4>,
    ToTypeArgument<T5>,
    ToTypeArgument<T6>,
    ToTypeArgument<T7>
  > {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isWithSpecialTypesAsGenerics(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a WithSpecialTypesAsGenerics object`,
      );
    }
    return WithSpecialTypesAsGenerics.fromFieldsWithTypes(typeArgs, content);
  }

  static fromSuiObjectData<
    T0 extends Reified<TypeArgument, any>,
    T1 extends Reified<TypeArgument, any>,
    T2 extends Reified<TypeArgument, any>,
    T3 extends Reified<TypeArgument, any>,
    T4 extends Reified<TypeArgument, any>,
    T5 extends Reified<TypeArgument, any>,
    T6 extends Reified<TypeArgument, any>,
    T7 extends Reified<TypeArgument, any>,
  >(
    typeArgs: [T0, T1, T2, T3, T4, T5, T6, T7],
    data: SuiObjectData,
  ): WithSpecialTypesAsGenerics<
    ToTypeArgument<T0>,
    ToTypeArgument<T1>,
    ToTypeArgument<T2>,
    ToTypeArgument<T3>,
    ToTypeArgument<T4>,
    ToTypeArgument<T5>,
    ToTypeArgument<T6>,
    ToTypeArgument<T7>
  > {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isWithSpecialTypesAsGenerics(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a WithSpecialTypesAsGenerics object`);
      }

      const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs;
      if (gotTypeArgs.length !== 8) {
        throw new Error(
          `type argument mismatch: expected 8 type arguments but got ${gotTypeArgs.length}`,
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

      return WithSpecialTypesAsGenerics.fromBcs(typeArgs, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return WithSpecialTypesAsGenerics.fromSuiParsedData(typeArgs, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<
    T0 extends Reified<TypeArgument, any>,
    T1 extends Reified<TypeArgument, any>,
    T2 extends Reified<TypeArgument, any>,
    T3 extends Reified<TypeArgument, any>,
    T4 extends Reified<TypeArgument, any>,
    T5 extends Reified<TypeArgument, any>,
    T6 extends Reified<TypeArgument, any>,
    T7 extends Reified<TypeArgument, any>,
  >(
    client: SuiClient,
    typeArgs: [T0, T1, T2, T3, T4, T5, T6, T7],
    id: string,
  ): Promise<
    WithSpecialTypesAsGenerics<
      ToTypeArgument<T0>,
      ToTypeArgument<T1>,
      ToTypeArgument<T2>,
      ToTypeArgument<T3>,
      ToTypeArgument<T4>,
      ToTypeArgument<T5>,
      ToTypeArgument<T6>,
      ToTypeArgument<T7>
    >
  > {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching WithSpecialTypesAsGenerics object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isWithSpecialTypesAsGenerics(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a WithSpecialTypesAsGenerics object`);
    }

    return WithSpecialTypesAsGenerics.fromSuiObjectData(typeArgs, res.data);
  }
}
