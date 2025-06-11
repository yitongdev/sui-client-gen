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
  T extends TypeArgument,
  U extends TypeArgument,
> {
  genericField1: ToField<T>;
  genericField2: ToField<U>;
}

export type WithTwoGenericsReified<
  T extends TypeArgument,
  U extends TypeArgument,
> = Reified<WithTwoGenerics<T, U>, WithTwoGenericsFields<T, U>>;

/**
 * Move struct: `WithTwoGenerics`
 * Module: `8b699fdce543505aeb290ee1b6b5d20fcaa8e8b1a5fc137a8b3facdfa2902209::fixture`
 *
 * @typeParam T - Type parameter 0
 * @typeParam U - Type parameter 1
 */
export class WithTwoGenerics<T extends TypeArgument, U extends TypeArgument>
  implements StructClass
{
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::fixture::WithTwoGenerics`;
  static readonly $numTypeParams = 2;
  static readonly $isPhantom = [false, false] as const;

  readonly $typeName = WithTwoGenerics.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::fixture::WithTwoGenerics<${ToTypeStr<T>}, ${ToTypeStr<U>}>`;
  readonly $typeArgs: [ToTypeStr<T>, ToTypeStr<U>];
  readonly $isPhantom = WithTwoGenerics.$isPhantom;

  readonly genericField1: ToField<T>;
  readonly genericField2: ToField<U>;

  private constructor(
    typeArgs: [ToTypeStr<T>, ToTypeStr<U>],
    fields: WithTwoGenericsFields<T, U>,
  ) {
    this.$fullTypeName = composeSuiType(
      WithTwoGenerics.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::fixture::WithTwoGenerics<${ToTypeStr<T>}, ${ToTypeStr<U>}>`;
    this.$typeArgs = typeArgs;

    this.genericField1 = fields.genericField1;
    this.genericField2 = fields.genericField2;
  }

  static reified<
    T extends Reified<TypeArgument, any>,
    U extends Reified<TypeArgument, any>,
  >(T: T, U: U): WithTwoGenericsReified<ToTypeArgument<T>, ToTypeArgument<U>> {
    return {
      typeName: WithTwoGenerics.$typeName,
      fullTypeName: composeSuiType(
        WithTwoGenerics.$typeName,
        ...[extractType(T), extractType(U)],
      ) as `${typeof PKG_V1}::fixture::WithTwoGenerics<${ToTypeStr<ToTypeArgument<T>>}, ${ToTypeStr<ToTypeArgument<U>>}>`,
      typeArgs: [extractType(T), extractType(U)] as [
        ToTypeStr<ToTypeArgument<T>>,
        ToTypeStr<ToTypeArgument<U>>,
      ],
      isPhantom: WithTwoGenerics.$isPhantom,
      reifiedTypeArgs: [T, U],
      fromFields: (fields: Record<string, any>) =>
        WithTwoGenerics.fromFields([T, U], fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        WithTwoGenerics.fromFieldsWithTypes([T, U], item),
      fromBcs: (data: Uint8Array) => WithTwoGenerics.fromBcs([T, U], data),
      bcs: WithTwoGenerics.bcs(toBcs(T), toBcs(U)),
      fromJSONField: (field: any) =>
        WithTwoGenerics.fromJSONField([T, U], field),
      fromJSON: (json: Record<string, any>) =>
        WithTwoGenerics.fromJSON([T, U], json),
      fromSuiParsedData: (content: SuiParsedData) =>
        WithTwoGenerics.fromSuiParsedData([T, U], content),
      fromSuiObjectData: (content: SuiObjectData) =>
        WithTwoGenerics.fromSuiObjectData([T, U], content),
      fetch: async (client: SuiClient, id: string) =>
        WithTwoGenerics.fetch(client, [T, U], id),
      new: (
        fields: WithTwoGenericsFields<ToTypeArgument<T>, ToTypeArgument<U>>,
      ) => {
        return new WithTwoGenerics([extractType(T), extractType(U)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return WithTwoGenerics.reified;
  }

  static phantom<
    T extends Reified<TypeArgument, any>,
    U extends Reified<TypeArgument, any>,
  >(
    T: T,
    U: U,
  ): PhantomReified<
    ToTypeStr<WithTwoGenerics<ToTypeArgument<T>, ToTypeArgument<U>>>
  > {
    return phantom(WithTwoGenerics.reified(T, U));
  }
  static get p() {
    return WithTwoGenerics.phantom;
  }

  static get bcs() {
    return <T extends BcsType<any>, U extends BcsType<any>>(T: T, U: U) =>
      bcs.struct(`WithTwoGenerics<${T.name}, ${U.name}>`, {
        generic_field_1: T,
        generic_field_2: U,
      });
  }

  static fromFields<
    T extends Reified<TypeArgument, any>,
    U extends Reified<TypeArgument, any>,
  >(
    typeArgs: [T, U],
    fields: Record<string, any>,
  ): WithTwoGenerics<ToTypeArgument<T>, ToTypeArgument<U>> {
    const [typeArg0, typeArg1] = typeArgs;
    return WithTwoGenerics.reified(typeArg0, typeArg1).new({
      genericField1: decodeFromFields(typeArg0, fields.generic_field_1),
      genericField2: decodeFromFields(typeArg1, fields.generic_field_2),
    });
  }

  static fromFieldsWithTypes<
    T extends Reified<TypeArgument, any>,
    U extends Reified<TypeArgument, any>,
  >(
    typeArgs: [T, U],
    item: FieldsWithTypes,
  ): WithTwoGenerics<ToTypeArgument<T>, ToTypeArgument<U>> {
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
    T extends Reified<TypeArgument, any>,
    U extends Reified<TypeArgument, any>,
  >(
    typeArgs: [T, U],
    data: Uint8Array,
  ): WithTwoGenerics<ToTypeArgument<T>, ToTypeArgument<U>> {
    const [typeArg0, typeArg1] = typeArgs;
    return WithTwoGenerics.fromFields(
      [typeArg0, typeArg1],
      WithTwoGenerics.bcs(toBcs(typeArg0), toBcs(typeArg1)).parse(data),
    );
  }

  toJSONField() {
    const [typeArg0, typeArg1] = this.$typeArgs;
    return {
      genericField1: fieldToJSON<T>(typeArg0, this.genericField1),
      genericField2: fieldToJSON<U>(typeArg1, this.genericField2),
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
    T extends Reified<TypeArgument, any>,
    U extends Reified<TypeArgument, any>,
  >(
    typeArgs: [T, U],
    field: any,
  ): WithTwoGenerics<ToTypeArgument<T>, ToTypeArgument<U>> {
    const [typeArg0, typeArg1] = typeArgs;
    return WithTwoGenerics.reified(typeArg0, typeArg1).new({
      genericField1: decodeFromJSONField(typeArg0, field.genericField1),
      genericField2: decodeFromJSONField(typeArg1, field.genericField2),
    });
  }

  static fromJSON<
    T extends Reified<TypeArgument, any>,
    U extends Reified<TypeArgument, any>,
  >(
    typeArgs: [T, U],
    json: Record<string, any>,
  ): WithTwoGenerics<ToTypeArgument<T>, ToTypeArgument<U>> {
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
    T extends Reified<TypeArgument, any>,
    U extends Reified<TypeArgument, any>,
  >(
    typeArgs: [T, U],
    content: SuiParsedData,
  ): WithTwoGenerics<ToTypeArgument<T>, ToTypeArgument<U>> {
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
    T extends Reified<TypeArgument, any>,
    U extends Reified<TypeArgument, any>,
  >(
    typeArgs: [T, U],
    data: SuiObjectData,
  ): WithTwoGenerics<ToTypeArgument<T>, ToTypeArgument<U>> {
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
    T extends Reified<TypeArgument, any>,
    U extends Reified<TypeArgument, any>,
  >(
    client: SuiClient,
    typeArgs: [T, U],
    id: string,
  ): Promise<WithTwoGenerics<ToTypeArgument<T>, ToTypeArgument<U>>> {
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
