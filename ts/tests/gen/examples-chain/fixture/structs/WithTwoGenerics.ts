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
import { PKG_V1 } from "../../constants.js";
import { BcsType, bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isWithTwoGenerics(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V1}::fixture::WithTwoGenerics` + "<");
}

export interface WithTwoGenericsFields<
  T0 extends TypeArgument,
  T1 extends TypeArgument,
> {
  genericField1: ToField<T0>;
  genericField2: ToField<T1>;
}

export type WithTwoGenericsReified<
  T0 extends TypeArgument,
  T1 extends TypeArgument,
> = Reified<WithTwoGenerics<T0, T1>, WithTwoGenericsFields<T0, T1>>;

/**
 * Move struct: `WithTwoGenerics`
 * Module: `8b699fdce543505aeb290ee1b6b5d20fcaa8e8b1a5fc137a8b3facdfa2902209::fixture`
 *
 * @typeParam T0 - Type parameter 0
 * @typeParam T1 - Type parameter 1
 */
export class WithTwoGenerics<T0 extends TypeArgument, T1 extends TypeArgument>
  implements StructClass
{
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::fixture::WithTwoGenerics`;
  static readonly $numTypeParams = 2;
  static readonly $isPhantom = [false, false] as const;

  readonly $typeName = WithTwoGenerics.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::fixture::WithTwoGenerics<${ToTypeStr<T0>}, ${ToTypeStr<T1>}>`;
  readonly $typeArgs: [ToTypeStr<T0>, ToTypeStr<T1>];
  readonly $isPhantom = WithTwoGenerics.$isPhantom;

  readonly genericField1: ToField<T0>;
  readonly genericField2: ToField<T1>;

  private constructor(
    typeArgs: [ToTypeStr<T0>, ToTypeStr<T1>],
    fields: WithTwoGenericsFields<T0, T1>,
  ) {
    this.$fullTypeName = composeSuiType(
      WithTwoGenerics.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::fixture::WithTwoGenerics<${ToTypeStr<T0>}, ${ToTypeStr<T1>}>`;
    this.$typeArgs = typeArgs;

    this.genericField1 = fields.genericField1;
    this.genericField2 = fields.genericField2;
  }

  static reified<
    T0 extends Reified<TypeArgument, any>,
    T1 extends Reified<TypeArgument, any>,
  >(
    T0: T0,
    T1: T1,
  ): WithTwoGenericsReified<ToTypeArgument<T0>, ToTypeArgument<T1>> {
    return {
      typeName: WithTwoGenerics.$typeName,
      fullTypeName: composeSuiType(
        WithTwoGenerics.$typeName,
        ...[extractType(T0), extractType(T1)],
      ) as `${typeof PKG_V1}::fixture::WithTwoGenerics<${ToTypeStr<ToTypeArgument<T0>>}, ${ToTypeStr<ToTypeArgument<T1>>}>`,
      typeArgs: [extractType(T0), extractType(T1)] as [
        ToTypeStr<ToTypeArgument<T0>>,
        ToTypeStr<ToTypeArgument<T1>>,
      ],
      isPhantom: WithTwoGenerics.$isPhantom,
      reifiedTypeArgs: [T0, T1],
      fromFields: (fields: Record<string, any>) =>
        WithTwoGenerics.fromFields([T0, T1], fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        WithTwoGenerics.fromFieldsWithTypes([T0, T1], item),
      fromBcs: (data: Uint8Array) => WithTwoGenerics.fromBcs([T0, T1], data),
      bcs: WithTwoGenerics.bcs(toBcs(T0), toBcs(T1)),
      fromJSONField: (field: any) =>
        WithTwoGenerics.fromJSONField([T0, T1], field),
      fromJSON: (json: Record<string, any>) =>
        WithTwoGenerics.fromJSON([T0, T1], json),
      fromSuiParsedData: (content: SuiParsedData) =>
        WithTwoGenerics.fromSuiParsedData([T0, T1], content),
      fromSuiObjectData: (content: SuiObjectData) =>
        WithTwoGenerics.fromSuiObjectData([T0, T1], content),
      fetch: async (client: SuiClient, id: string) =>
        WithTwoGenerics.fetch(client, [T0, T1], id),
      new: (
        fields: WithTwoGenericsFields<ToTypeArgument<T0>, ToTypeArgument<T1>>,
      ) => {
        return new WithTwoGenerics([extractType(T0), extractType(T1)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return WithTwoGenerics.reified;
  }

  static phantom<
    T0 extends Reified<TypeArgument, any>,
    T1 extends Reified<TypeArgument, any>,
  >(
    T0: T0,
    T1: T1,
  ): PhantomReified<
    ToTypeStr<WithTwoGenerics<ToTypeArgument<T0>, ToTypeArgument<T1>>>
  > {
    return phantom(WithTwoGenerics.reified(T0, T1));
  }
  static get p() {
    return WithTwoGenerics.phantom;
  }

  static get bcs() {
    return <T0 extends BcsType<any>, T1 extends BcsType<any>>(T0: T0, T1: T1) =>
      bcs.struct(`WithTwoGenerics<${T0.name}, ${T1.name}>`, {
        generic_field_1: T0,
        generic_field_2: T1,
      });
  }

  static fromFields<
    T0 extends Reified<TypeArgument, any>,
    T1 extends Reified<TypeArgument, any>,
  >(
    typeArgs: [T0, T1],
    fields: Record<string, any>,
  ): WithTwoGenerics<ToTypeArgument<T0>, ToTypeArgument<T1>> {
    const [typeArg0, typeArg1] = typeArgs;
    return WithTwoGenerics.reified(typeArg0, typeArg1).new({
      genericField1: decodeFromFields(typeArg0, fields.generic_field_1),
      genericField2: decodeFromFields(typeArg1, fields.generic_field_2),
    });
  }

  static fromFieldsWithTypes<
    T0 extends Reified<TypeArgument, any>,
    T1 extends Reified<TypeArgument, any>,
  >(
    typeArgs: [T0, T1],
    item: FieldsWithTypes,
  ): WithTwoGenerics<ToTypeArgument<T0>, ToTypeArgument<T1>> {
    if (!isWithTwoGenerics(item.type)) {
      throw new Error("not a WithTwoGenerics type");
    }
    const [typeArg0, typeArg1] = typeArgs;
    assertFieldsWithTypesArgsMatch(item, typeArgs);

    return WithTwoGenerics.reified(typeArg0, typeArg1).new({
      genericField1: decodeFromFieldsWithTypes(
        typeArg0,
        item.fields.generic_field_1,
      ),
      genericField2: decodeFromFieldsWithTypes(
        typeArg1,
        item.fields.generic_field_2,
      ),
    });
  }

  static fromBcs<
    T0 extends Reified<TypeArgument, any>,
    T1 extends Reified<TypeArgument, any>,
  >(
    typeArgs: [T0, T1],
    data: Uint8Array,
  ): WithTwoGenerics<ToTypeArgument<T0>, ToTypeArgument<T1>> {
    const [typeArg0, typeArg1] = typeArgs;
    return WithTwoGenerics.fromFields(
      [typeArg0, typeArg1],
      WithTwoGenerics.bcs(toBcs(typeArg0), toBcs(typeArg1)).parse(data),
    );
  }

  toJSONField() {
    const [typeArg0, typeArg1] = this.$typeArgs;
    return {
      genericField1: fieldToJSON<T0>(typeArg0, this.genericField1),
      genericField2: fieldToJSON<T1>(typeArg1, this.genericField2),
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
    T0 extends Reified<TypeArgument, any>,
    T1 extends Reified<TypeArgument, any>,
  >(
    typeArgs: [T0, T1],
    field: any,
  ): WithTwoGenerics<ToTypeArgument<T0>, ToTypeArgument<T1>> {
    const [typeArg0, typeArg1] = typeArgs;
    return WithTwoGenerics.reified(typeArg0, typeArg1).new({
      genericField1: decodeFromJSONField(typeArg0, field.genericField1),
      genericField2: decodeFromJSONField(typeArg1, field.genericField2),
    });
  }

  static fromJSON<
    T0 extends Reified<TypeArgument, any>,
    T1 extends Reified<TypeArgument, any>,
  >(
    typeArgs: [T0, T1],
    json: Record<string, any>,
  ): WithTwoGenerics<ToTypeArgument<T0>, ToTypeArgument<T1>> {
    if (json.$typeName !== WithTwoGenerics.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    const [typeArg0, typeArg1] = typeArgs;
    assertReifiedTypeArgsMatch(
      composeSuiType(
        WithTwoGenerics.$typeName,
        ...[typeArg0, typeArg1].map(extractType),
      ),
      json.$typeArgs,
      [typeArg0, typeArg1],
    );

    return WithTwoGenerics.fromJSONField([typeArg0, typeArg1], json);
  }

  static fromSuiParsedData<
    T0 extends Reified<TypeArgument, any>,
    T1 extends Reified<TypeArgument, any>,
  >(
    typeArgs: [T0, T1],
    content: SuiParsedData,
  ): WithTwoGenerics<ToTypeArgument<T0>, ToTypeArgument<T1>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isWithTwoGenerics(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a WithTwoGenerics object`,
      );
    }
    return WithTwoGenerics.fromFieldsWithTypes(typeArgs, content);
  }

  static fromSuiObjectData<
    T0 extends Reified<TypeArgument, any>,
    T1 extends Reified<TypeArgument, any>,
  >(
    typeArgs: [T0, T1],
    data: SuiObjectData,
  ): WithTwoGenerics<ToTypeArgument<T0>, ToTypeArgument<T1>> {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isWithTwoGenerics(data.bcs.type)
      ) {
        throw new Error(`object at is not a WithTwoGenerics object`);
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

      return WithTwoGenerics.fromBcs(typeArgs, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return WithTwoGenerics.fromSuiParsedData(typeArgs, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<
    T0 extends Reified<TypeArgument, any>,
    T1 extends Reified<TypeArgument, any>,
  >(
    client: SuiClient,
    typeArgs: [T0, T1],
    id: string,
  ): Promise<WithTwoGenerics<ToTypeArgument<T0>, ToTypeArgument<T1>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching WithTwoGenerics object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isWithTwoGenerics(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a WithTwoGenerics object`);
    }

    return WithTwoGenerics.fromSuiObjectData(typeArgs, res.data);
  }
}
